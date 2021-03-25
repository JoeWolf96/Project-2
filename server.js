 const express = require('express');
 const app = express();
 const port = 3008;
 const methodOverRide = require('method-override')
//
 const Bounties = require('./models/bounties')
 const seed = require('./models/seed')
//
 app.use(methodOverRide('_method'))
 app.use(express.static('public'))
 app.use(express.urlencoded({extended: true}))


 // Set up Database
 const mongoose = require('mongoose');
 const mongoURI = "mongodb://127.0.0.1:27017/bounties"
 const db = mongoose.connection;

 mongoose.connect(mongoURI, {
     useFindAndModify: false,
     useNewUrlParser: true,
     useUnifiedTopology: true
 }, ()=>{
     console.log("database connection checked");
 })

 db.on('error', (err)=> { console.log('ERROR: ', err)});
 db.on('connected', ()=> { console.log("mongo connected")})
 db.on('disconnected', ()=> { console.log("mongo disconnected")})

//controller

const controller = require('./controllers/bountiescontrollers.js')

app.use('/bounty', controller);
 

Bounties.create( seed , (err,data) =>{
  if (err) console.log(err.message)
    console.log("added data",data)
})


//item page

// app.get('/bounty/:id' , (req,res) => { 
//  	res.render('show.ejs' , {

//  		particularItems:bounties[req.params.id]
 		
//  	})

//  })
//new page
// app.get('/bounty/:id/new', (req, res) => {

//   res.render('new.ejs', {
//   	particularItems:bounties[req.params.id]
//   })
// })

//post

// app.post('/bounty/:id', (req, res) => {
//   particularItems:bounties[req.params.id]
//   bounties.push(req.body)
//   res.redirect('/bounty/:id')
// })






app.listen(port, () => {
     console.log("listening")
 }) 
const express = require('express');
 const app = express();
 const port = 3008;
 const methodOverRide = require('method-override')
 const bounties = require("./models/bounties.js")

 app.use(methodOverRide('_method'))
 app.use(express.static('public'))
 app.use(express.urlencoded({extended: true}))

 // Set up Database
 const mongoose = require('mongoose');

 // basiccrud is the name of the database we will use/create
 const mongoURI = "mongodb://127.0.0.1:27017/basiccrud"

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


//homepage



app.get(('/bounty'), (req, res) => {
     res.render('index.ejs', { 
     	items:bounties})
 })
 



//item page

app.get('/bounty/:id' , (req,res) => { 
 	res.render('show.ejs' , {

 		particularItems:bounties[req.params.id]
 		
 	})

 })
//new page
app.get('/bounty/:id/new', (req, res) => {

  res.render('new.ejs', {
  	particularItems:bounties[req.params.id]
  })
})

//post

app.post('/bounty/:id', (req, res) => {
  particularItems:bounties[req.params.id]
  bounties.push(req.body)
  res.redirect('/bounty/:id')
})






app.listen(port, () => {
     console.log("listening")
 }) 
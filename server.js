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
 
//create files comment out to not duplicate

// Bounties.create( seed , (err,data) =>{
	
//   if (err){console.log(err)
//     } else {
//     console.log("added data"+data)
//     }
//   // db.close()
// })








app.listen(port, () => {
     console.log("listening")
 }) 
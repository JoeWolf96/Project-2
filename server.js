 const express = require('express');
 const app = express();
 const port = 3008;
 const methodOverRide = require('method-override')
 //heroku
 require('dotenv').config()
 const PORT = process.env.PORT
 const mongodbURI = process.env.MONGODBURI
//
 const Bounties = require('./models/bounties')
 const seed = require('./models/seed')
//
 app.use(methodOverRide('_method'))
 app.use(express.static('public'))
 app.use(express.urlencoded({extended: true}))


 // Set up Database
 // const mongoose = require('mongoose');
 //
 // const db = mongoose.connection;

 // mongoose.connect(mongoURI, {
 //     useFindAndModify: false,
 //     useNewUrlParser: true,
 //     useUnifiedTopology: true
 // }, ()=>{
 //     console.log("database connection checked");
 // })

 // db.on('error', (err)=> { console.log('ERROR: ', err)});
 // db.on('connected', ()=> { console.log("mongo connected")})
 // db.on('disconnected', ()=> { console.log("mongo disconnected")})


 //code found on atlas 

 const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://LICHqueen96:<password>@cluster0.ldlbu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});
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

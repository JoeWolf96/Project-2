const express = require('express');
 const app = express();
 const PORT = 3000;

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

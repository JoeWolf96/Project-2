const express = require('express');
 const app = express();
 const port = 3009;
 const methodOverRide = require('method-override')

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
const items = require("./models/bounties.js")

app.get(('/bounty'), (req, res) => {
     res.render('home.ejs', { 
     	items:items})
 })
 

app.listen(port, () => {
     console.log("listening")
 }) 

//item page

app.get('/bounty/:id' , (req,res) => { 
 	res.render('itemview.ejs' , {

 		items : items[req.params.id]
 		
 	})

 })



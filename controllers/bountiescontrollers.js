const express = require('express');
const router = express.Router();

const Bounties= require('../models/bounties')


router.get('/', (req, res) => {
    // render an index.ejs template w/list of fruits


    // add a database query to get the fruits
    // in the callback render the template and pass the fruits from the database
    Bounties.find({}, (err, foundBounties, next) => {
        if (err) { 
            console.log(err)
            next(err)
        } else {
            res.render('home.ejs')
        }
    })
})

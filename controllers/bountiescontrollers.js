const express = require('express');
const router = express.Router();

 const Bounties = require('../models/bounties')
 const seed = require('../models/seed')



router.get('/bounty', (req, res) => {
     
    Bounties.find({}, (err, foundBounties, next) => {
           res.render('index.ejs', { 
        items:seed})
        
    })
})


//new

router.get('/new', (req, res) => {
    res.render('new.ejs');
})

//show route
router.get('/:id', (req, res) => {
    Bounties.findById(req.params.id, (err, foundBounties) => {
        res.render('show.ejs', { particularItems: seed })
    })
})




module.exports = router;
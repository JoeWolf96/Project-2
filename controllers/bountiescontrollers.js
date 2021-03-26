const express = require('express');
const router = express.Router();

 const Bounties = require('../models/bounties')
 const seed = require('../models/seed')



router.get('/', (req, res) => {
     
    Bounties.find({}, (err, foundBounties) => {
           res.render('index.ejs', { 
        seed:foundBounties })
        
    })
})
//new

router.get('/new', (req, res) => {
    res.render('new.ejs');
})
//show route
router.get('/:id', (req, res) => {
    console.log(req.params.id)
    Bounties.findById(req.params.id, (err, foundBounties) => {
        console.log(foundBounties)
        res.render('show.ejs', { seed: foundBounties })
        
        
    })
})




//POST to id

router.post('/', (req, res) => {
        Bounties.create(req.body, (error, createdBounty) => {
        if (error) {
            console.log(error);
            res.send(error);
        }
        else {
            console.log(createdBounty)
            console.log(req.params.id)
            res.redirect('/bounty')
        }
     })
 })

 



module.exports = router;
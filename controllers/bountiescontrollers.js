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
//delete
router.delete('/:id', (req, res) => {
    Bounties.findByIdAndRemove(req.params.id, (err, data) => {
        if (err) {
            console.log(err)
        } else {
            
            res.redirect('/bounty')
        }
    })
})
//EDIT

router.get('/:id/edit', (req, res) => {
    Bounties.findById(req.params.id, (err, foundBounties) => {
        res.render('edit.ejs', {
            seed: foundBounties // passes in foundFruit
        })

    })
})
//PUT after edit
 router.put('/:id', (req, res) => {
    Bounties.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedBounties) => {
        res.redirect('/bounty')
    })
})



module.exports = router;
const express = require('express');
const TeeTime = require('../models/teetimes')

const router = express.Router();

// Index
router.get('/', (req, res) => {
    TeeTime.find({}, (error, allTeeTimes) => {
        res.render('index.ejs', {
            teetimes: allTeeTimes,
        });
    });

});

// New
router.get('/new', (req, res) => {
    res.render('new.ejs');
});


// Update
router.put('/:id', (req, res) => {
    TeeTime.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
            new: true,
        },
        (error, updatedTeeTime) => {
            res.redirect(`/teetime/${req.params.id}`)
        }
    )
});




// Create
router.post('/', (req, res) => {
    TeeTime.create(req.body, (error, createdTeeTime) => {
        res.redirect('/teetimes')
    });
});














module.exports = router; 
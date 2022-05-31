const express = require('express');
const TeeTime = require('../models/teetimes')
const router = express.Router();
// const methodOverride = require('method-override'); 
// const { append } = require('express/lib/response');



// app.use(methodOverride('_method')); 



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



// Delete
router.delete('/:id', (req, res) => {
    TeeTime.findByIdAndDelete(req.params.id, () => {
        res.redirect('/teetimes');
    });
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



//Edit
router.get('/edit/:id', (req, res) => {
    TeeTime.findById(req.params.id, (error, foundTeeTime) => {
        res.render('edit.ejs', {
            teetime: foundTeeTime,
        });
    });
});




// Show 
router.get('/:id', (req, res) => {
    TeeTime.findById(req.params.id, (err, foundTeeTime) => {
        res.render('show.ejs', {
            teetime: foundTeeTime,
        });
    });
});






module.exports = router;





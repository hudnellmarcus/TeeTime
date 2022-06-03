const express = require('express');
const app = express();
const TeeTime = require('../models/teetimes')
const router = express.Router();
const methodOverride = require('method-override');
// const { append } = require('express/lib/response');
// const User = require('../models/user')
// const session = require('express-session')


app.use(methodOverride('_method'));
app.use(express.static('/public'));


//Index

router.get('/dashboard', (req, res) => {
    TeeTime.find({}, (error, allTeeTimes) => {
        const currentUser = req.session.currentUser
        if (currentUser) {
            res.render('dashboard.ejs', {
                currentUser: req.session.currentUser,
                teetimes: allTeeTimes,
            });
        } else {
            (res.redirect('/'))
        }
    });
    
});


router.get('/', (req, res) => {
    res.render('index.ejs', {
        currentUser: req.session.currentUser
    })
})

// New
router.get('/new', (req, res) => {
    res.render('new.ejs', {
        currentUser: req.session.currentUser
    });
});



// Delete
router.delete('/:id', (req, res) => {
    TeeTime.findByIdAndDelete(req.params.id, () => {
        res.redirect('/dashboard');
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
        res.redirect('/dashboard')
    });
});



//Edit
router.get('/edit/:id', (req, res) => {
    TeeTime.findById(req.params.id, (error, foundTeeTime) => {
        res.render('edit.ejs', {
            teetime: foundTeeTime,
            currentUser: req.session.currentUser
        });
    });
});




// Show 
router.get('/:id', (req, res) => {
    TeeTime.findById(req.params.id, (err, foundTeeTime) => {
        res.render('show.ejs', {
            currentUser: req.session.currentUser,
            teetime: foundTeeTime,
        });
    });
});






module.exports = router;





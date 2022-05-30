const express = require('express');
const router = express.Router();
const Reservation = require('../models/reservations')


// Create
router.get('/new', (req, res)=> {
    res.render('new.ejs');
});














module.exports = router; 
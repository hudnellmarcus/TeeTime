// Dependencies
const bcrypt = require('bcrypt');
const express = require('express');
const router = express.Router();
const User = require('../models/user')



// New (registration page)
router.get('/teetimes/register', (req, res) => {
    res.send('users/new.ejs')
});









module.exports = router;
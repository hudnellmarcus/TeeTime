// Dependencies 
const express = require('express');
const bcrypt = require('bcrypt');
const sessionsRouter = express.Router();
const User = require('../models/user');

// New (login page)
// router.get('/login', (req, res) => {
//     res.render('sessions/new.ejs', {
//         currentUser: req.session.currentUser
//     });
// });


// // Delete (logout route)
sessionsRouter.delete('/', (req, res)=> {
    req.session.destroy((error) => {
        res.redirect('/');
    });
})
// // Create (login route)
sessionsRouter.post('/login', (req, res) => {
    // Check for an existing user
    User.findOne({
        username: req.body.username
    }, (error, foundUser) => {
        // send error message if no user found
        if (!foundUser) {
            res.send(`Oops! no such user has been registered!`);
        } else {
            // if a user has been found
            // compare the given password with the hashed password 
            const passwordMatches = bcrypt.compareSync(req.body.password, foundUser.password);
            if (passwordMatches) {
                // add the user to our session
                req.session.currentUser = foundUser;
                // redirect back to our home page
                res.redirect('/');
            } else {
                // if the passwords don't match
                res.send('Oops! Invalid credentials');
            }
        }
    }
    )
});

// Export Sessions Router
module.exports = sessionsRouter;
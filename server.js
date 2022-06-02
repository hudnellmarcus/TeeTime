// Dependencies 
require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const session = require('express-session');
const methodOverride = require('method-override');
const sessionsRouter = require('./controllers/sessions')
const userRouter = require('./controllers/users')
const User = require('./models/user')
const path = require('path');

// const TeeTime = require('./models/teetimes')




// connect to Mongodb
mongoose.connect(process.env.DATABASE_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});


// Middleware 
app.use(express.urlencoded({ extended: false })); //body parser 
app.use(methodOverride("_method"));
app.use(express.static('public'));
app.use(express.static(path.join(__dirname, './views/public')));


app.use(
    session({
        secret: process.env.SECRET,
        resave: false,
        saveUninitialized: false
    })
);


// Routes / Controllers 
const teeTimesController = require('./controllers/teetimes')
app.use('/', teeTimesController);

const userController = require('./controllers/users');
app.use('/users', userController);

const sessionsController = require('./controllers/sessions');
app.use('/sessions', sessionsController);



// Index
app.get('/', (req, res) => {
    if (req.session.currentUser) {
        res.render('dashboard.ejs', {
            currentUser: req.session.currentUser
        });
    } else {
        res.render('index.ejs' , {
       currentUser: req.session.currentUser }
        )}
});


// New

// (login page)



// Delete


// Update


// Create






// Edit



// Show







// Connection logs 
const db = mongoose.connection;
db.on('error', (err) => console.log(err.message + ' is mongod not running?'));
db.on('connected', () => console.log('mongo connected'));
db.on('disconnected', () => console.log('mongo disconnected'));


// Listener 
const PORT = process.env.PORT

app.listen(PORT, () => {
    console.log(`Listening to Andre ${PORT}`);
})




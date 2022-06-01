// Dependencies 
require('dotenv').config();
const express = require('express');
const app = express(); 
const mongoose = require('mongoose'); 
const session = require('express-session');
const methodOverride = require('method-override');

// const TeeTime = require('./models/teetimes')




// connect to Mongodb
mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});


// Middleware 
app.use(express.urlencoded({extended: true })); //body parser 
app.use(methodOverride("_method"));

app.use(
    session({
        secret:process.env.SECRET,
        resave: false,
        saveUninitialized: false
    })
);


// Routes / Controllers 
const teeTimesController = require('./controllers/teetimes')
app.use('/teetimes', teeTimesController);

const userController = require('./controllers/users');
app.use('/teetimes', userController);

const sessionsController = require('./controllers/sessions');
app.use('/teetimes', sessionsController);



// Index
// app.get('/', (req, res) => {
// if (req.session.currentUser) {
//     res.render('dashboard.ejs', {
//         currentUser: req.session.currentUser
//     });
// } else {
//     res.render('index.ejs', {
//         currentUser: req.session.currentUser
//     });
// }
// }); 

// New
// app.get('/teetimes/new', (req, res)=> {
//     res.render('new.ejs');
// });

// Delete

// Update


// Create
// app.post('/teetimes', (req, res) => {
// TeeTime.create(req.body, (error, createdTeeTime) => {
//     res.send(createdTeeTime)
// });
// });

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




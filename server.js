// Dependencies 
require('dotenv').config();
const express = require('express');
const app = express(); 
const mongoose = require('mongoose'); 




// connect to Mongodb
mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});


// Middleware 
app.use(express.urlencoded({extended:false})); //body parser 



// Routes / Controllers 
const reservationsController = require('./controllers/reservations')



// Index
app.get('/', (req, res) => {
    res.send("this is the index")
});

// New
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
PORT = process.env.PORT

app.listen(PORT, () => {
    console.log(`Listening to Andre ${PORT}`);
})




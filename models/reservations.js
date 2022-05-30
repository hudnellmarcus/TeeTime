const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const reservationSchema = new Schema ({
    date: {type: Date, required: true},
    time: {type: String, require: true},
    location: String,
    updated: { type: Date, default: Date.now },
})

const Reservation = mongoose.model('Reservation', reservationSchema);

module.exports = Reservation; 
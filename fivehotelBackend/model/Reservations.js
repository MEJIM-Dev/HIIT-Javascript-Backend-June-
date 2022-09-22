const mongoose = require("mongoose")

const reservationSchema =  mongoose.Schema({
    guest: { type: Number, required: true },
    roomno: { type: Number, required: true },
    email: { type: String, required: true },
    mobile: { type: String, required: true },
    checkin: { type: Date },
    checkout: { type: Date },
    ticketno: { type: String, required: true}
}, {timestamp: true})

const reservation = mongoose.model("reservations",reservationSchema)

module.exports = reservation;
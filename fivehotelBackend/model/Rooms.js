const mongoose = require("mongoose")

const roomSchema =  mongoose.Schema({
    number: {type: String, required:true, unique:true},
    type: {type:String}, //single, double room, apartment(4 rooms)
    price: {type: Number},
    currency: {type: String},
    info: {type: String},
    available: {type: Boolean, default:true}
})

const room = mongoose.model("rooms",roomSchema)

module.exports= room;
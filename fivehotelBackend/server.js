const express = require("express")
const cors = require("cors")
require("dotenv").config({})
const router = require("./route/index")
const mongoose = require("mongoose")

const {PORT, DB_URL} = process.env
const app = express()

mongoose.connect(DB_URL)

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use("/api", router)

app.listen(PORT, (err)=>{
    if(err){
        return console.log("server failed to start")
    }
    console.log("application started on port:",PORT)
})
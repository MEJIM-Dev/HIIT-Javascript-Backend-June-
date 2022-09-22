const express = require("express")
const router = express.Router()
const { room, reservation } = require("../model/index")
const crypto = require("crypto")

router.get(["/","/index","/home","/homepage"], (req,res)=>{
    res.send("homepage")
})

router.get("/rooms", async(req, res)=> {
    try {
        const rooms = await room.find({available: true})
        res.send(rooms)
    } catch(err){
        res.status(501).send(err)
    }
})

router.get("/room", async(req, res)=> {
    try {
        console.log(req.query)
        const rooms = await room.findOne({number: req.query.no})
        res.send(rooms)
    } catch(err){
        res.status(501).send(err)
    }
})

router.post("/book", async(req,res)=>{
    try {
        console.log(req.body)

        const currroom = await room.findOne({number: req.body.roomno})

        if(currroom.available==false){
            return res.status(401).send({msg: "Unavaible room"})
        }

        const ticketno= crypto.randomBytes(32).toString("hex")  
        const { roomno, checkin, checkout, guest, mobile, email} = req.body  
        const data = await reservation.create({
            roomno, 
            checkin, 
            checkout, 
            guest,
            email, 
            mobile,
            ticketno
        })

        currroom.available=false

        currroom.save((err)=>{
            if(err) {
                return res.status(500).send({msg: "Failed to update entry"})
            }
            res.send(data) 
        })
         
    } catch (error) {
        console.log(error)
        res.status(504).send(error)
    }
})

router.post("/create", async(req, res)=>{
   try{ 
        console.log(req.body)
        const data = await room.create({
        ...req.body
        })
        res.send(data)

    } catch(err){
        console.log(err)
        res.status(400).send(err)
    }
})

router.post("/checkout", async(req, res)=>{
    try {
        const reserve = await reservation.findOne(req.body)
        const curroom = await room.findOne({number: reserve.roomno})
        console.log(reserve)
        curroom.available=true
        console.log(curroom)
        curroom.save((err)=>{
            if(err){
                return res.status(504).send("failed to update")
            }
            return res.send("user checkout")
        })
        
    } catch (error) {
        res.status(500).send(error)
    }
    
})

module.exports= router;


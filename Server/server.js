const express = require("express")
const fs = require("fs")
const path = require("path")

const app = express()

app.listen(5000)

const users = ["sam","ken","sarah"]

const public = path.join(__dirname,"public")
//Setting up exposed/public directory for access from clients
app.use(express.static(public))

app.get("/", (req,res)=>{
    console.log(req.url)
    const page = fs.readFileSync("./public/index.html",{encoding:"utf-8"})
    res.send("index")
})

app.get("/about", (req,res)=>{
    console.log(req.url)
    const page = fs.readFileSync("./public/about.html",{encoding:"utf-8"})
    res.sendFile(path.join(__dirname,"public","about.html"))
})

app.get("/contact",(req,res)=>{
    console.log(req.url)
    res.send("welcome to the contact page")
})

app.post("/register",(req,res)=>{
    const possibleUser = req.query.username
    
    console.log(req.url)

    if(users.includes(possibleUser)){
        return res.end("User already exist")
    } else{
        users.push(possibleUser)
        return res.send("user is been registered")
    }
    
})

app.get("/*", (req,res)=>{
    res.status(404).send("Resource not found")
})




























// app.post("/api/register",(req,res)=>{
//     console.log(req.query)
//     res.status(200).end()
// })

// const http = require("http")

// http.createServer(function(req,res){

//     console.log(req.url)

//     if((req.url==="/home" || req.url==="/" || req.url==="/index") && req.method=="get"){
//         return res.end("welcome to the home page")
//     }else if(true){
//         return res.end("404 no resource found for this address")
//     }else if(true){
//         return res.end("404 no resource found for this address")
//     }else if(true){
//         return res.end("404 no resource found for this address")
//     }else if(true){
//         return res.end("404 no resource found for this address")
//     }else if(true){
//         return res.end("404 no resource found for this address")
//     }else if(true){
//         return res.end("404 no resource found for this address")
//     }else if(true){
//         return res.end("404 no resource found for this address")
//     }else if(true){
//         return res.end("404 no resource found for this address")
//     }else if(true){
//         return res.end("404 no resource found for this address")
//     }v
    
// }).listen(5000)
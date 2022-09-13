const express = require("express")
const mongoose = require("mongoose")
// const cors = require("cors")
// const cookieParser = require("cookie-parser")
const fs = require("fs")
const path = require("path")
const session = require("express-session")
const sessionStore = require("connect-mongodb-session")(session)
const bcrypt = require("bcrypt")  
const nodemailer = require("nodemailer")

const app = express()

const uri = "mongodb://localhost:27017/JuneDb"

app.use(express.json())
app.use(express.urlencoded({extended: false}))
// app.use(cookieParser())
app.use(express.static("public"))

mongoose.connect(uri,(err=>{
    if(err) {
        return console.log(err)
    }
    console.log("connected")
}))

const store = new sessionStore({
    uri: uri,
    collection: "session"
})

const mail = nodemailer.createTransport({
    // host: "smtp.gmail.com",//"smtp.mailtrap.io",
    // port: "587",
    service:"gmail",
    // secure: false,
    auth: {
        user: "youremailaddress@gmail.com",
        pass:"your password"
    }
})

app.use(session({
    secret: "adb37a37747849fe606372e729d192f2",
    resave: false,
    saveUninitialized: false,
    cookie: {
        httpOnly:true,
    },
    store: store
}))

app.listen(5677)

//Middleware
const midman = function(req,res,next){
    console.log("midman");
    
    next()
}

const userSchema = mongoose.Schema({
    name: String,
    email: { type: String, required: true, unique: true},
    password: { type: String, required: true},
    verified: { type:Boolean, default: true}
})

const User = mongoose.model("Users", userSchema)

app.get("/", (req, res)=>{
    console.log( req.headers)
    res.send("res")
})

app.get("/sendmail",(req, res)=>{

    mail.sendMail({
        from: "something@email.com",
        to:"taskmastarh@gmail.com",
        subject:"Welcome message",
        text: "Hello User, this is our test app confirming you are still interested in the previous offer.",
        html: `<a href="http://localhost:5677/verify">Verify</a>`
    }, (err, info)=>{
        if(err) {
            console.log(err)
            return res.send("Failed to send email")
        }
        if(!info.accepted){
            console.log(info)
            return res.status(502).send("failed to send mail")
        }

        res.send("mail sent successfully")
    })

})

app.get("/login", (req,res)=>{
    
    if(req.session.auth) {
        return res.redirect("/dashboard.html")
    }

    res.redirect("/login.html")
})

app.get("/logout",(req, res)=>{
    req.session.destroy()
    res.send("successful")
})

app.post("/login",(req,res)=>{
    User.findOne({email: req.body.email}, (err,data)=>{
        if(err){
            return res.status(404).send(err)
        }

        if(data==null){
            return res.status(400).send("Incorrect username or password")
        }

        // if(data.password != req.body.password){
        //     return res.status(400).send("Incorrect username or password")
        // }

        if(!bcrypt.compareSync(req.body.password,data.password)){
            return res.status(400).send("Incorrect username or password")
        }

        req.session.auth=true
        req.session.user = data

        // res.cookie("auth",req.body.email,{
        //     maxAge: 1000*60*15,
        //     httpOnly:true,
        // })
        // res.cookie("user",req.body,{
        //     maxAge: 1000*60*15,
        //     httpOnly:true,
        // })
        // res.cookie("something","something",{
        //     maxAge: 1000*60*15,
        //     httpOnly:true,
        // })

        let page = fs.readFileSync(path.join(__dirname,"public","dashboard.html"))
        res.send(page)
    })
})

app.get("/dashboard", (req, res)=>{
    console.log(req.session)
    let page = fs.readFileSync(path.join(__dirname,"public","login.html"))
    if(req.session.auth!=true){
        return res.redirect("/login.html")
        // return res.status(401).send(page)
    }
    page = fs.readFileSync(path.join(__dirname,"public","dashboard.html"))
    res.redirect("/dashboard.html")
    // res.send(page)
    // res.redirect("/dashboard.html")
})

app.put("/user", (req, res)=>{
    User.findOne({email: req.body.email}, (err, data)=>{
        if(err){
            return res.send("Can't connect to the db")
        }
        const {name, email, password} = req.body
        console.log(data)
        data.name = name
        data.email = email
        data.password = password

        data.save((err)=>{
            if(err) return res.send(err)
            res.send("User updated")
        })
    })
})

app.delete("/deleteaccount", (req,res)=>{
    const em = req.body.email
    User.findOne({email:em},(err,data)=>{
        if(err){
            return res.send(err)
        }
        if(data==null){
            return res.send("user does not exist")
        }
        data.remove((err,result)=>{
            if(err){
                return res.send(err)
            }
            res.send(em+ "deleted successfully")
        })
    })
    // User.findOne({email:em},(err,data)=>{
    //     if(err) return res.send(err)
    //     if(data==null){
    //         return res.send("user doesn't exist")
    //     }
    //     data.remove((err,data)=>{
    //         if(err) return res.send(err)
    //         res.send(`${data.email} : "deleted successfully"`)
    //     })
    // })
})

app.post("/user",(req, res)=>{
    User.create(
        {
            name: req.body.name,
            password: bcrypt.hashSync(req.body.password, 10),
            email: req.body.email,
        }
    )
    .then((data)=>{
        console.log(data)
        const name = data.name
        const email = data.email
        res.send({name,email})
    })
    .catch((e)=>{
        console.log(e)
        res.status(400).send("Failed")
    })
    
})

app.get("/users", async(req, res)=>{
    User.find((err,data)=>{
            if(err){
                return res.send(err)
            }
             res.send(data)
    })  
})

app.get("/search/", async(req, res)=>{
    User.find( {name: req.query.search}, (err,data)=>{
            if(err){
                return res.send(err)
            }
             res.send(data)
    })
    
})

app.get("/search/username", async(req, res)=>{
    User.findOne( {name: req.query.search}, (err,data)=>{
            if(err){
                return res.send(err)
            }
             res.send(data)
    })
    
})

app.get(["/","/home","/index","/homepage"], midman ,function(req,res){
    console.log("return")
    res.end("home")
})

//query params
app.get("/givememoneyt", function(req,res){
    console.log(req.query)
    res.end("no")
})

app.get("/givememoneyt/tee/pot", function(req,res){
    console.log(req.query)
    res.end("no")
})

app.post("/postdata", (req,res)=>{
    console.log(req.body)
    if(req.body.name!="david"){
        return res.end("not the owner")
    }else{
        res.end("login")
    }
    
} )

app.post("/app/:id",(req,res)=>{
    console.log(req.headers)
    console.log(req.body)
    if(req.params.id=="auth"){
        return res.end("successful")
    }
    return res.end("unsuccessful")
})

const shoes = ["asdfb","nike","ytrs"]
const bags = ["sdfghjkl","bag2","bag3"]

//path/route Params
app.get("/givememoneyt/:item/:b", function(req,res){
    console.log(req.params)
    if(req.params.item=="shoes"){
        return res.json(shoes)
    } else{
        return res.json(bags)
    }
})














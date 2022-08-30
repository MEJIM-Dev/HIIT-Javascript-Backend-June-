const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")

const app = express()

const uri = "mongodb://localhost:27017/JuneDb"

app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(cors())
mongoose.connect(uri,(err=>{
    if(err) {
        return console.log(err)
    }
    console.log("connected")
}))


app.listen(5677)

//Middleware
const midman = function(req,res,next){
    console.log("midman");
    next()
}

const userSchema = mongoose.Schema({
    name: String,
    email: {type:String, required:true, unique:true},
    password:{type:String, required:true},
    verified: {type:Boolean, default:true}
})

const User = mongoose.model("Users", userSchema)

app.post("/login",(res,req)=>{
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
        if(err) return res.send(err)
        if(data==null){
            return res.send("user doesn't exist")
        }
        data.remove((err,data)=>{
                if(err) return res.send(err)
                res.send(`${data.email} : "deleted successfully"`)
            })
    })
})

app.post("/user",(req, res)=>{
    console.log(req.body)
    // const dbuser = new User({
    //             name: req.body.name,
    //             password: req.body.password
    //         })

    // dbuser.save()
    User.create(
        {
            name: req.body.name,
            password: req.body.password,
            email: req.body.email,
        }
    )
    .then((data)=>{
        console.log(data)
        // const {name,email} = data
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
    // try {
    //     const users = await User.find()
    //      const receipt = await voucher.find({users.name: userSchema.name})
        // res.send(receipt)
    // } catch (error) {
    //     res.send(error)
    // }

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

const shoes = ["asdfb","nike","ytrs"]
const bags = ["sdfghjkl","bag2","bag3"]

app.post("/app/:id",(req,res)=>{
    console.log(req.headers)
    console.log(req.body)
    if(req.params.id=="auth"){
        return res.end("successful")
    }
    return res.end("unsuccessful")
})

//path/route Params
app.get("/givememoneyt/:item/:b", function(req,res){
    console.log(req.params)
    if(req.params.item=="shoes"){
        return res.json(shoes)
    } else{
        return res.json(bags)
    }
    res.end("a was not passed")
})














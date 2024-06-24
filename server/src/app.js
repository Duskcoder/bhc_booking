const express=require("express")
const app=express()
const cors=require("cors")
const cookie = require("cookie-parser")

//Middleware
app.use(cors())
app.use(express.json())
app.use(cookie())
app.use(express.urlencoded({extended:true}))

//Routes Import
const userRoute=require("./routes/userRoutes")
const adminRoute=require("./routes/adminRoutes")
const roleRoute = require("./routes/roleRoutes")

app.use("/api/v2",userRoute)
app.use("/api/v2",adminRoute)
app.use("/api/v2/role",roleRoute)


module.exports=app
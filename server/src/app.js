const express=require("express")
const app=express()
const cors=require("cors")

//Middleware
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))

//Routes Import



module.exports=app
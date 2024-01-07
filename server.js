require('dotenv').config()
const express = require('express')

const app = express()


app.get("/",(req,res)=>{
    res.send("<h1 style='color:green'>Hello World from Home Page!</h1>")
})

app.get("/hello",(req,res)=>{
    res.send("<h1 style='color:red'>Hello World!</h1>")
})


app.listen(process.env.PORT,()=>{
    console.log(`Server started on Port : ${PORT}`)
})
require('dotenv').config()


const express = require('express');

const app = express()
const port = 4000

app.get('/',(req,res)=>{
    res.send('hello world')
})

app.get('/twitter',(req,res)=>{
    res.send('hello twitter')
})
app.get('/login',(req,res)=>{
    res.send('<h1>please login to proceed</h1>')
})
app.get('/coffee',(req,res)=>{
    res.send('<h2>coffee on youtube</h2>')
})
app.listen(process.env.PORT,()=>{
    console.log(`listening on ${process.env.PORT}`)
})
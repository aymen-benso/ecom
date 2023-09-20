require('dotenv').config();
const express = require('express');
const Products = require('./routes/products');

//express app

const app = express();

app.use('/api/products',Products)

//routes

app.get("/",(req,res)=>{
    res.json({mssg:'hello am aymen api lol'})
})

app.listen(process.env.PORT,()=>{
    console.log('server run on port',process.env.PORT)
})
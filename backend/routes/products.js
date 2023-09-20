const express = require('express');

const router = express.Router()

router.get('/',(req,res)=>{
    res.json({mssg: "home page" })
})

router.get('/:id',(req,res)=>{
    res.json({
        id:"10",
        name:"aymen",
        addres:"blida"
    })
})

router.post('/',(req,res)=>{
    res.json({
        mssg : "Post working good"
    })
})

router.delete('/:id',(req,res)=>{
    res.json({
        mssg : "delete working seccufly"
    })
})

router.patch('/:id',(req,res)=>{
    res.json({
        mssg : "update working seccufly"
    })
})

module.exports = router
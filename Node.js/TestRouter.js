const express = require('express')

const router = express.Router();

const mv =function(req,res,next){
    console.log('进入第一个中间键')

    next();
}

router.get('/user',mv,(req,res)=>{
    console.log('接受到user请求')
})

router.post('/add',(req,res)=>{
    console.log('接受到了post请求')
})

module.exports=router

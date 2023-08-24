const express = require('express')

const app = express()
//注册json中间键

app.use(express.json())

app.use(express.urlencoded({extended:false}))

//路由请求
app.get('/getUser',function(req,res){

    console.log(req.query)
    console.log(req.param)
    res.send()
})

//post请求
app.post('/addUser',function(req,res){
    console.log(req.body)
    res.send('is ok')
})


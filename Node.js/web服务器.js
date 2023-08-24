

const express = require('express')
const router = require('./TestRouter')

const app = express()

// app.listen(8081,()=>{
//     console.log('http://127.0.0.1:8081')
// })

//中间键函数
// const mv =function(req,res,next){
//     console.log('进入第一个中间键')

//     next();
// }


// app.use(mv) //全局中间键
// app.use(router)
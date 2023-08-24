const { copyFileSync } = require('fs')
const http =require('http')

//创建一个web服务
const server=http.createServer()

//监听 如果浏览器访问我这个服务 就能出发

server.on('request',(req,res)=>{
    console.log('fang wen server')
})

server.listen(8086,()=>{
    console.log('服务启动了 http://127.0.0.1:8086')
})
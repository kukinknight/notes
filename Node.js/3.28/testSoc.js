const http = require('http')
const fs = require('fs')
const socketio=require('socket.io')

//创建服务器
 const server = http.createServer(function(request,response){
    //读取文件
    fs.readFile('/htmlPage.html','utf8',function(err,data){
        response.writeHead(200,{'Content-Type':'text/html'})
        response.end(data)
    })
}).listen(8081,function(){
    console.log('http://127.0.0.1:8081')
})

//创建wenSocket服务器
const io=socketio.listen(server)
 //监听server这个服务器
io.sockets.on('connection',function(socket){
    console.log('客户端已经连接成功')
})
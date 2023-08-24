var socketio = require('socket.io');
var express = require('express');
var http = require('http')
var fs = require('fs');

//声明变量
var seats = [
    [1,1,0,1,1,0,0,0,0,1,1,0,1,11],
    [1,1,0,1,1,0,0,0,0,1,1,0,1,11],
    [1,1,0,1,1,0,0,0,0,1,1,0,1,11],
    [1,1,0,1,1,0,0,0,0,1,1,0,1,11],
    [1,1,0,1,1,0,0,0,0,1,1,0,1,11],
    [1,1,0,1,1,0,0,0,0,1,1,0,1,11],
    [1,1,0,1,1,0,0,0,0,1,1,0,1,11],
    [1,1,0,1,1,0,0,0,0,1,1,0,1,11],
    [1,1,0,1,1,0,0,0,0,1,1,0,1,11],
    [1,1,0,1,1,0,0,0,0,1,1,0,1,11],
    [1,1,0,1,1,0,0,0,0,1,1,0,1,11],
    [1,1,0,1,1,0,0,0,0,1,1,0,1,11]
]

//创建服务器
const app = express();
const serve = http.createServer(app)

//设置路由
app.get('/',function(request,response,next){
    fs.readFile('HTMLPage.html',function(error,data){
        response.send(data.toString());
    })
});
app.get('/seats',function(request,response,next){
    response.send(seats)
});

//启动服务
serve.listen(52273,function(){
    console.log('服务器监听地址在 http://127.0.0.1:52273');
})

//创建socket对象
const io = socketio.listen(serve);
io.sockets.on('connection',function(socket){
    socket.on('reserve',function(data){   
        seats[data.y] [data.x] = 2
        io.sockets.emit('reserve',data)
    })
})


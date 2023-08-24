const { createServer } = require("http");
const { Server } = require("socket.io");

const httpServer = createServer();

let options ={  //设置服务器支持客户端JS跨域 
    cors: { origin: '*' }
}
const io = new Server(httpServer, options);

io.on("connection", (socket) => {   //服务器监听新用户连接 
    console.log(`用户连接socket.id=${socket.id}`);
    //emit 广播事件 emit(事件名,内容)
    let 信息 = `新用户进来了，socket.id=${socket.id}`
    io.emit('广播事件','[广播:]'+信息) //请注意，广播是仅服务器功能。
    socket.emit("刘刘",'[欢迎登录]'+信息 );  //对登录的一个用户发送
});

io.on("听我说",(消息)=>{
    io.emit('广播事件','[广播]'+消息)
})

httpServer.listen(3000);    //服务器工作在 127.0.0.1:3000 

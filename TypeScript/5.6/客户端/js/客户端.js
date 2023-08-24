let serverURL = `http://127.0.0.1:3000` //设置服务器地址
const socket = io(serverURL)


sendBtn.onclick = function(){
  let 值  = val.value
  //象服务器发送消息
  console.log(值)
  socket.emit('听我说',值)
}
socket.on("connect", () => {//连接上啦
  my.innerHTML+= '连接上啦'
  console.log(socket.id); // x8WIv7-mJelg7on_ALbx
});


//自定义 接受服务器 事件 
socket.on("刘刘", (消息) => {
    my.innerHTML +=`${消息}<br>`
});
  
//自定义 接受服务器 事件 
socket.on("广播事件", (消息) => {
  my.innerHTML +=`${消息}<br>`
});

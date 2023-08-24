let canvas = document.querySelector('canvas')
let c2d = canvas.getContext('2d')
let 方块 = {
    x: 100,
    y: 100,
    vx: 1,
    vy: 1
}

run()
function run() { //主动画循环函数
    //清空屏幕
    c2d.clearRect(0, 0, 800, 800)

    方块.x += 方块.vx
    方块.y += 方块.vy

    c2d.fillStyle = 'green'     //设置方块颜色，背景默认是黑色的 
    c2d.fillRect(方块.x, 方块.y, 50, 50)

    window.requestAnimationFrame(run)
}

    //------------------  录制视频------------------------------
    // 创建一个 MediaStream API
const 数据流 = canvas.captureStream()            //stream
const 记录 = new MediaRecorder(数据流, { mimeType: 'video/webm' }); //recorder

const data = [];
记录.ondataavailable = function (event) {
    if (event.data && event.data.size) {
        data.push(event.data);
    }
};

记录.onstop = () => {       //当记录停止 替换视频
    const url = URL.createObjectURL(new Blob(data, { type: 'video/webm' }));
    你的名字.src = url;     //替换视频的地址
};

//增加按钮控制
startBtn.onclick = () => {
    记录.start();
    notice.innerHTML = '开始录制'
}

endBtn.onclick = () => {
    记录.stop();
    notice.innerHTML = '结束录制'
}


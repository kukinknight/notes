

// 定义计算两点距离的函数
function dist(p1,p2) {
    let len = 0
    len = Math.pow(p2.x - p1.x, 2) + Math.pow(p2.y - p1.y, 2)
    len = Math.sqrt(len)
    return len
}//dist



// 绘制图像的方法
function draw() {
    // 如果鼠标移动，则计算触手的目标点与当前点的偏差
    if (mouse.x) {
        target.errx = mouse.x - target.x
        target.erry = mouse.y - target.y
    } else {
        // 否则，计算触手的目标点的横坐标
        target.errx =
            w / 2 +
            ((h / 2 - q) * Math.sqrt(2) * Math.cos(t)) /
            (Math.pow(Math.sin(t), 2) + 1) -
            target.x;
        target.erry =
            h / 2 +
            ((h / 2 - q) * Math.sqrt(2) * Math.cos(t) * Math.sin(t)) /
            (Math.pow(Math.sin(t), 2) + 1) -
            target.y;
    }

    // 更新触手的目标点坐标
    target.x += target.errx / 10
    target.y += target.erry / 10

    // 更新时间
    t += 0.01;

    // 绘制触手的目标点

    // 更新上一个触手的目标点坐标
    last_target.x = target.x
    last_target.y = target.y
}
function change(){
    // 如果鼠标移动，则计算触手的目标点与当前点的偏差
    if (mouse.x) {
        nowPoint.errx = mouse.x - nowPoint.x
        nowPoint.erry = mouse.y - nowPoint.y
    } else {
        // 否则，计算触手的目标点的横坐标 @@@@@@@@@数学公式
        nowPoint.errx =
            W / 2 +
            ((H / 2 - stepLen) * Math.sqrt(2) * Math.cos(t)) /
            (Math.pow(Math.sin(t), 2) + 1) -
            nowPoint.x;

        nowPoint.erry =
            H / 2 +
            ((H / 2 - stepLen) * Math.sqrt(2) * Math.cos(t) * Math.sin(t)) /
            (Math.pow(Math.sin(t), 2) + 1) -
            nowPoint.y;
    }

    // 更新触手的目标点坐标
    nowPoint.x += nowPoint.errx / 10
    nowPoint.y += nowPoint.erry / 10

    // 更新时间
    t += 0.01;

    // 绘制触手的目标点

    // 更新上一个触手的目标点坐标
    oldPoint.x = nowPoint.x
    oldPoint.y = nowPoint.y
}//change


function drawHead(){
    c2d.beginPath();
    c2d.arc(
        nowPoint.x,
        nowPoint.y,
        10,//dist(oldPoint, nowPoint)
        0,
        2 * Math.PI
    );
    c2d.fillStyle = "hsl(210,100%,80%)"
    c2d.fill();
    c2d.closePath()
}
    


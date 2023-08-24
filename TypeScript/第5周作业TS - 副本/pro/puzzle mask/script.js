let img = document.querySelector(".img")
let canvas = document.querySelector("#canvas")
canvas.width = img.offsetWidth
canvas.height = img.offsetHeight
let ctx = canvas.getContext("2d")
let color = "gold"
ctx.strokeStyle = color
canvas.style.border = "1px solid " + color
let w = 16
let h = 12

function puzzleline(t1, t2) {
    let temp = [t1, t2] //随机交换起点和终点
    temp = temp.sort(() => Math.random() - 0.5)
    let p1 = temp[0]
    let p2 = temp[1]
    let r = Math.sqrt( //计算P1,P2之间距离
        Math.pow(p1.x - p2.x, 2) +
        Math.pow(p1.y - p2.y, 2)
    )
    let mp = { //计算p1,p2中心点坐标
        x: (p2.x - p1.x) / 2 + p1.x,
        y: (p2.y - p1.y) / 2 + p1.y
    }
    let rnd = Math.random() * 5 + 15 //随机弧线中心距离
    ctx.beginPath() //绘制前1/3的线段
    ctx.moveTo(p1.x, p1.y)
    ctx.lineTo((p2.x - p1.x) / 3 + p1.x, (p2.y - p1.y) / 3 + p1.y)
    ctx.stroke()
    ctx.beginPath() //绘制后1/3线段
    ctx.moveTo((p2.x - p1.x) * 2 / 3 + p1.x, (p2.y - p1.y) * 2 / 3 + p1.y)
    ctx.lineTo(p2.x, p2.y)
    ctx.stroke()
    let deg = Math.atan2(p1.y - mp.y, p1.x - mp.x) //获取线段倾斜角
    let rx = r / rnd * Math.cos(deg + Math.PI / 2) + mp.x //获取弧线圆心坐标
    let ry = r / rnd * Math.sin(deg + Math.PI / 2) + mp.y
    let d1 = Math.atan2( //计算线段端点相对于弧线中心的角度
        (p2.y - p1.y) / 3 + p1.y - ry,
        (p2.x - p1.x) / 3 + p1.x - rx
    )
    let d2 = Math.atan2(
        (p2.y - p1.y) * 2 / 3 + p1.y - ry,
        (p2.x - p1.x) * 2 / 3 + p1.x - rx
    )
    let pr = Math.sqrt( //计算圆弧半径
        Math.pow((p2.x - p1.x) / 3 + p1.x - rx, 2) +
        Math.pow((p2.y - p1.y) / 3 + p1.y - ry, 2)
    )
    ctx.beginPath()
    ctx.arc(rx, ry, pr, d1, d2)
    ctx.stroke()
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    for (let x = 0; x < w; x++) {
        for (let y = 0; y < h; y++) {
            if (y > 0) {
                puzzleline({
                    x: x * canvas.width / w,
                    y: y * canvas.height / h
                }, {
                    x: (x + 1) * canvas.width / w,
                    y: y * canvas.height / h
                })
            }
            if (x > 0) {
                puzzleline({
                    x: x * canvas.width / w,
                    y: y * canvas.height / h
                }, {
                    x: x * canvas.width / w,
                    y: (y + 1) * canvas.height / h
                })
            }

        }
    }
}
draw()
canvas.addEventListener("wheel", function(evt) {
    if (evt.deltaY > 0) {
        w += 4
        h += 3
    }
    if (evt.deltaY < 0 && w > 4 && h > 3) {
        w -= 4
        h -= 3
    }
    draw()
})
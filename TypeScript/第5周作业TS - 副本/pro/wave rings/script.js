let canvas = document.createElement("canvas")
canvas.width = window.innerWidth
canvas.height = window.innerHeight
document.body.appendChild(canvas)
let ctx = canvas.getContext("2d")
let t = 0
let mouse = {
    x: 0,
    y: 0
}
let rings = []
document.addEventListener("mousemove", function (evt) {
    mouse.x = evt.x
    mouse.y = evt.y
})
function map(val, min1, max1, min2, max2) {
    return (val - min1) / (max1 - min1) * (max2 - min2) + min2
}

class ring {
    constructor(x, y) {
        this.x = x
        this.y = y
        this.ax = 0
        this.ay = 0
        this.ang = 0
        this.color = "white"
        this.cx = 0
        this.cy = 0
    }
    update() {
        this.ax = map(mouse.x, 0, canvas.width, -4 * Math.PI, 4 * Math.PI)
        this.ay = map(mouse.y, 0, canvas.width, -4 * Math.PI, 4 * Math.PI)
        this.ang = this.ax * (this.x / canvas.width) + this.ay * (this.y / canvas.height)
        this.color = (2 * t * Math.PI + this.ang) * 180 / Math.PI
        this.cx = this.x + 20 * Math.cos(2 * t * Math.PI + this.ang)
        this.cy = this.y + 20 * Math.sin(2 * t * Math.PI + this.ang)
    }
    draw() {
        ctx.beginPath()
        ctx.fillStyle = "hsl(" + this.color + "deg,50%,50%)"
        ctx.arc(this.cx, this.cy, 2, 0, Math.PI * 2, 0)
        ctx.fill()
        ctx.beginPath()
        // ctx.strokeStyle = "gray"
        // ctx.arc(this.x, this.y, 20, 0, Math.PI * 2, 0)
        // ctx.stroke()
    }
}
for (var x = 0; x <= canvas.width; x += 30) {
    for (var y = 0; y <= canvas.height; y += 30) {
        rings.push(new ring(x, y))
    }
}
function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    for (var i in rings) {
        rings[i].update()
        rings[i].draw()
    }
    t += 0.01
}
setInterval(draw, 20)
let canvas = document.getElementById("canvas")
canvas.width = 800
canvas.height = 800
let ctx = canvas.getContext("2d")

let count = 30
let circles = []
class circle {
    constructor(x, y, c) {
        this.x = x
        this.y = y
        this.action = false
        this.r = 0
        this.cx = 0
        this.cy = 0
        this.d = 0
        this.color = c
        this.age = 50
    }
    update() {
        if (this.action) {
            this.x = this.r * Math.cos(this.d) + this.cx
            this.y = this.r * Math.sin(this.d) + this.cy
            this.d += Math.PI / 25
            if (this.age == 0) {
                this.action = false
                this.age = 50
            }
            this.age--
        }
    }
    draw() {
        ctx.beginPath()
        ctx.arc(this.x, this.y, 10, 0, Math.PI * 2)
        let hsl = Math.atan2(canvas.height / 2 - this.y, canvas.width / 2 - this.x)
        ctx.fillStyle = "hsl(" + hsl / Math.PI * 180 + ",80%,50%)"
        ctx.fill()
    }
}

function init() {
    for (let i = 0; i < count; i++) {
        let x = 300 * Math.cos(Math.PI * 2 / count * i) + canvas.width / 2
        let y = 300 * Math.sin(Math.PI * 2 / count * i) + canvas.height / 2
        let color = i / count * 360
        circles.push(new circle(x, y, color))
    }
    radius = Math.sqrt(
        Math.pow(circles[2].x - circles[0].x, 2) +
        Math.pow(circles[2].y - circles[0].y, 2)
    )
    for (let i = 0; i < count; i++) {
        let c = circles[i]
        let n = {}
        if (i % 2 == 0) {
            n = circles[(i + 2) % count]
        } else {
            n = circles[(i + count - 2) % count]
        }
        c.cx = (n.x - c.x) / 2 + c.x
        c.cy = (n.y - c.y) / 2 + c.y
        c.r = radius / 2
        c.d = Math.atan2(c.cy - c.y, c.cx - c.x)
    }
}
init()

function ani() {
    ctx.fillStyle = "rgba(0,0,0,0.08)"
    ctx.fillRect(0, 0, canvas.width, canvas.height)
        // ctx.clearRect(0, 0, canvas.width, canvas.height)
    for (let i in circles) {
        let c = circles[i]
        c.update()
        c.draw()
    }
}
setInterval(ani, 100 / 6)
let step = 0
setInterval(() => {
    let c = circles[step % count]
    c.action = true
    step++
}, 100);
let canvas = document.getElementById("canvas")
canvas.width = 600
canvas.height = 400
let ctx = canvas.getContext("2d")
let arraysin = []
let arraycos = []
class circle {
    constructor() {
        this.x = 100
        this.y = 100
        this.deg = 0
    }
    update() {
        this.deg += 0.01
    }
    draw() {
        let x = 80 * Math.cos(this.deg) + this.x
        let y = 80 * Math.sin(this.deg) + this.y
        ctx.beginPath()
        ctx.arc(x, y, 3, 0, Math.PI * 2)
        ctx.fillStyle = "green"
        ctx.fill()
        ctx.beginPath()
        ctx.arc(this.x, this.y, 80, 0, Math.PI * 2)
        ctx.strokeStyle = "green"
        ctx.stroke()
        arraysin.push(y)
        arraycos.push(x)
        ctx.moveTo(this.x, this.y)
        ctx.lineTo(x, y)
        ctx.stroke()
        ctx.strokeStyle = "gray"
        ctx.beginPath()
        ctx.moveTo(x, y)
        ctx.lineTo(x, 200)
        ctx.moveTo(x, y)
        ctx.lineTo(200, y)
        ctx.moveTo(200, 300)
        ctx.lineTo(canvas.width, 300)
        ctx.moveTo(0, 200)
        ctx.lineTo(canvas.width, 200)
        ctx.moveTo(100, 100)
        ctx.lineTo(canvas.width, 100)
        ctx.moveTo(200, 0)
        ctx.lineTo(200, canvas.height)
        ctx.moveTo(100, 100)
        ctx.lineTo(100, 200)
        ctx.stroke()
        ctx.beginPath()
        ctx.arc(200, 200, 200 - x, Math.PI / 2, Math.PI)
        ctx.stroke()
        ctx.beginPath()
        ctx.arc(200, 200, 100, Math.PI / 2, Math.PI)
        ctx.stroke()
    }
}
let c = new circle()
function ani() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    c.update()
    c.draw()
    if (arraysin.length > 314 * 2 * 2) {
        arraysin.splice(0, 1)
        arraycos.splice(0, 1)
    }
    for (let i in arraysin) {
        ctx.beginPath()
        ctx.arc(200 + i / 1.57, arraysin[arraysin.length - i], 0.5, 0, Math.PI * 2)
        ctx.fillStyle = "red"
        ctx.fill()
        ctx.beginPath()
        ctx.arc(200 + i / 1.57, 400 - arraycos[arraysin.length - i], 0.5, 0, Math.PI * 2)
        ctx.fillStyle = "blue"
        ctx.fill()
    }
}
setInterval(ani, 100 / 6)
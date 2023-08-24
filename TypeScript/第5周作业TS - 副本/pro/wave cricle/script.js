let canvas = document.getElementById("canvas")
canvas.width = 800
canvas.height = 800
let ctx = canvas.getContext("2d")
let dots = []
class dot {
    constructor(d) {
        this.d = d
        this.x = 0
        this.y = 0
        this.r = 0
        this.w = 0
        this.s = 0.2
        this.deg = d
    }
    update() {
        if (Math.abs(this.w) > 15) {
            this.s = -this.s
        }
        this.w += this.s
        this.r = this.w * Math.sin(this.d * Math.PI / 4) + 300
        this.x = this.r * Math.cos(this.deg * Math.PI / 180) + canvas.width / 2
        this.y = this.r * Math.sin(this.deg * Math.PI / 180) + canvas.height / 2
        this.deg += 0.3
        this.deg = this.deg % 360

    }
    draw() {
        ctx.beginPath()
        ctx.arc(this.x, this.y, 5, 0, Math.PI * 2, 0)
        ctx.fillStyle = "hsl(" + this.deg + "deg,80%,50%)"
        ctx.fill()
    }
}
for (var x = 0; x < 360; x += 0.5) {
    dots.push(new dot(x))
}
function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    // ctx.fillRect(0, canvas.height / 2, canvas.width, 1)

    for (i in dots) {
        let d = dots[i]
        d.update()
        d.draw()
    }
}
setInterval(draw, 20)
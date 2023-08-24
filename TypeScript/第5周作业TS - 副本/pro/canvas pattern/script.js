let canvas = document.querySelector("#canvas")
canvas.width = window.innerWidth
canvas.height = window.innerHeight
let ctx = canvas.getContext("2d")
let img = new Image()
let pattern = {}
ctx.lineWidth = 3
let count = canvas.width * canvas.height / 10000
img.src = "cat.jpg"
img.onload = () => {
    let w = img.width
    let h = img.height
    let width = 0
    let height = 0
    if (w / h < canvas.width / canvas.height) {
        width = canvas.width
        height = width * h / w
    } else {
        height = canvas.height
        width = height * w / h
    }
    let tempcanvas = document.createElement("canvas")
    tempcanvas.width = window.innerWidth
    tempcanvas.height = window.innerHeight
    let tctx = tempcanvas.getContext("2d")
    tctx.drawImage(img, (tempcanvas.width - width) / 2, (tempcanvas.height - height) / 2, width, height)
    pattern = ctx.createPattern(tempcanvas, "no-repeat")

}
let particles = []
class particle {
    constructor() {
        this.r = Math.random() * 20 + 20
        this.d = Math.random() * Math.PI * 2
        this.vd = Math.random() * Math.PI / 180
        this.x = Math.random() * canvas.width
        this.y = canvas.height + this.r
        this.vy = Math.random() * 2 + 2
        this.color = "hsl(" + Math.random() * 360 + ",80%,50%)"
        this.p = (Math.random() * 4) | 0 + 5
    }
    update() {
        this.y -= this.vy
        this.d += this.vd
        if (this.y < -this.r) {
            this.y = canvas.height + this.r
        }
    }
    draw() {
        ctx.beginPath()
        for (let i = 0; i < this.p; i++) {
            let x = this.r * Math.cos(this.d + i * Math.PI * 2 / this.p) + this.x
            let y = this.r * Math.sin(this.d + i * Math.PI * 2 / this.p) + this.y
            ctx.lineTo(x, y)
        }
        ctx.closePath()
        ctx.fill()
        ctx.strokeStyle = this.color
        ctx.stroke()

    }
}

function ani() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.fillStyle = pattern
    if (particles.length < count) {
        particles.push(new particle())
    }
    for (let i in particles) {
        let p = particles[i]
        p.update()
        p.draw()
    }
}
setInterval(ani, 100 / 6)
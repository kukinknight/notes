let canvas = document.querySelector("#canvas")
canvas.width = window.innerWidth
canvas.height = window.innerHeight
let ctx = canvas.getContext("2d")
let particles = []
class particle {
    constructor(x, y, d, mr, c) {
        this.x = x
        this.y = y
        this.r = 0
        this.d = d
        this.nx = 0
        this.ny = 0
        this.mr = mr
        this.color = c
    }
    update() {
        this.r += 2
    }
    draw() {
        this.nx = this.r * Math.cos(this.d) + this.x
        this.ny = this.r * Math.sin(this.d) + this.y
        let w = this.mr / 50
        ctx.beginPath()
        ctx.arc(this.nx, this.ny, w, 0, Math.PI * 2)
        ctx.fillStyle = this.color
        ctx.fill()
    }
}
function newtree() {
    particles.push(
        new particle(
            Math.random() * canvas.width,
            canvas.height,
            -Math.PI / 2,
            Math.random() * 200 + 100,
            "hsl(" + Math.random() * 360 + ",80%,50%)"
        )
    )
    ctx.fillStyle = "rgba(0,0,0,0.08)"
    ctx.fillRect(0, 0, canvas.width, canvas.height)
}
function ani() {
    if (particles.length == 0) {
        newtree()
    }
    for (let i in particles) {
        let p = particles[i]
        p.update()
        p.draw()
        if (p.r > p.mr) {
            particles.push(new particle(p.nx, p.ny, p.d - Math.PI / 5, p.r * 0.6, p.color))
            particles.push(new particle(p.nx, p.ny, p.d + Math.PI / 5, p.r * 0.6, p.color))
            particles.splice(i, 1)
        }
        if (p.mr < 3) {
            particles.splice(i, 1)
        }
    }
}
setInterval(ani, 100 / 6)
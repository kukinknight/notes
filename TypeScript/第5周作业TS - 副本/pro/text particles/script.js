let canvas = document.getElementById("canvas")
canvas.width = window.innerWidth
canvas.height = window.innerHeight
let ctx = canvas.getContext("2d")
let msg = document.getElementById("msg")
let gap = 3
let grad = ctx.createLinearGradient(0, 0, canvas.width, canvas.height)
grad.addColorStop(0.3, 'green')
grad.addColorStop(0.5, 'orange')
grad.addColorStop(0.7, 'red')
let particles = []
class particle {
    constructor(x, y, color) {
        this.x = Math.random() * canvas.width
        this.y = canvas.height
        this.ox = x
        this.oy = y
        this.color = color
        this.s = Math.random() * 0.02 + 0.02
    }
    update() {
        this.x += (this.ox - this.x) * this.s
        this.y += (this.oy - this.y) * this.s
    }
    draw() {
        ctx.beginPath()
        ctx.fillStyle = this.color
        ctx.fillRect(this.x, this.y, gap - 1, gap - 1)
    }
}
function text2particles(text) {
    particles = []
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.fillStyle = grad
    ctx.font = "200px arial"
    ctx.textAlign = "center"
    ctx.textBaseline = "middle"
    ctx.lineWidth = 3
    let x = canvas.width / 2
    let y = canvas.height / 2
    ctx.fillText(text, x, y)
    ctx.strokeStyle = "gold"
    ctx.lineWidth = 3
    ctx.strokeText(text, x, y)
    let data = ctx.getImageData(0, 0, canvas.width, canvas.height).data
    for (y = 0; y < canvas.height; y += gap) {
        for (x = 0; x < canvas.width; x += gap) {
            let index = (y * canvas.width + x) * 4
            if (data[index + 3] > 0) {
                let r = data[index]
                let g = data[index + 1]
                let b = data[index + 2]
                let c = "rgb(" + r + "," + g + "," + b + ")"
                particles.push(new particle(x, y, c))
            }
        }
    }
}
text2particles("HELLO")
msg.addEventListener("keyup", function (e) {
    text2particles(e.target.value)
})
function ani() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    for (let i in particles) {
        let p = particles[i]
        p.update()
        p.draw()
    }
}
setInterval(ani, 100 / 6)
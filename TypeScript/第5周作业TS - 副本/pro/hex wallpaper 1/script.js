let canvas = document.getElementById("canvas")
canvas.width = window.innerWidth
canvas.height = window.innerHeight
let ctx = canvas.getContext("2d")
let hexs = []
let max = Math.sqrt(
    Math.pow(canvas.height, 2) +
    Math.pow(canvas.width, 2)
)
let mouse = {
    x: canvas.width / 2,
    y: canvas.height / 2
}
canvas.addEventListener("mousemove", function (evt) {
    mouse.x = evt.x
    mouse.y = evt.y
})
class hex {
    constructor(x, y) {
        this.x = x
        this.y = y
        this.color = ""
        this.size = 38
    }
    update() {
        let hsl = Math.atan2(mouse.y - this.y, mouse.x - this.x)
        this.color = "hsla(" + hsl / Math.PI * 180 + ",80%,50%,0.5)"
        let r = Math.sqrt(
            Math.pow(mouse.x - this.x, 2) + Math.pow(mouse.y - this.y, 2)
        )
        this.size = (1 - r / max) * 38
    }
    draw() {
        ctx.beginPath()
        for (let i = 0; i < 6; i++) {
            let x = this.size * Math.cos(i * Math.PI / 3) + this.x
            let y = this.size * Math.sin(i * Math.PI / 3) + this.y
            ctx.lineTo(x, y)
        }
        ctx.closePath()
        ctx.fillStyle = this.color
        ctx.fill()
        ctx.stroke()
    }
}
function init() {
    for (let w = 0; w < canvas.width / 120 + 1; w++) {
        for (let h = 0; h < canvas.height / Math.sqrt(1200) + 1; h++) {
            hexs.push(new hex(w * 120 + (h % 2) * 60, h * Math.sqrt(1200)))
        }
    }
}
init()
function ani() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    for (let i in hexs) {
        let h = hexs[i]
        h.update()
        h.draw()
    }
}
setInterval(() => {
    ani()
}, 100 / 6);
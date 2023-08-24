let canvas = document.createElement("canvas")
canvas.width = 250
canvas.height = 80
document.body.appendChild(canvas)
let ctx = canvas.getContext("2d")
let blocks = []
let steps = 1
let count = 0
class block {
    constructor(x, y, c) {
        this.x = x
        this.y = y
        this.opt = 1
        this.c = c
    }
    update() {
        this.opt -= 1 / 60
    }
    draw() {
        if (this.c == "w") {
            ctx.fillStyle = "rgba(30, 144, 255," + this.opt + ")"
        } else {
            ctx.fillStyle = "rgba(46, 213, 115," + this.opt + ")"
        }

        ctx.fillRect(this.x, this.y, 18, 18)
    }

}

function init() {
    for (var i = 0; i < 30; i++) {
        let x = (i % 10) * 20
        let y = (i / 10 | 0) * 20
        if (i < 25) {
            blocks.push(new block(x, y, "w"))
        } else {
            blocks.push(new block(x, y, "r"))
        }

    }

}
init()

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    for (var i in blocks) {
        // blocks[i].update()
        blocks[i].draw()
    }

    blocks[(count / 60) | 0].update()
    if (count < 1500) {
        ctx.fillStyle = "rgb(30, 144, 255)"
    } else {
        ctx.fillStyle = "rgb(46,213,115)"
    }
    count++
    ctx.fillRect(0, 60, 198, 18)
    for (var i = 0; i < steps; i++) {
        ctx.fillStyle = "#ffa502"
        ctx.fillRect(200, 60 - i * 20, 48, 18)
    }
    if (count == 1800) {
        for (var i in blocks) {
            blocks[i].opt = 1
        }
        count = 0
        steps++
    }
    if (steps > 4) {
        clearInterval(run)

        ctx.clearRect(0, 0, canvas.width, canvas.height)
    }
}
let run = setInterval(draw, 1000);
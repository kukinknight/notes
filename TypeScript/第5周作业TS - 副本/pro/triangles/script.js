let canvas = document.getElementById("canvas")
canvas.width = 800
canvas.height = 800
let ctx = canvas.getContext("2d")
let tris = []
let count = 0
class tri {
    constructor(x, y, r, d) {
        this.x = x
        this.y = y
        this.r = r
        this.d = d
        this.td = this.d
        this.act = true
        this.opt = 180
    }
    update() {
        if (this.td < this.d + 60) {
            this.td++
        }
        this.opt--
    }
    draw() {
        drawtri(this.x, this.y, this.r, this.d)
        drawtri(this.x, this.y, this.r, this.td)
    }
}
function drawtri(x, y, r, d) {
    ctx.beginPath()
    for (let i = 0; i < 3; i++) {
        let p = point(x, y, r, d + i * 120)
        ctx.lineTo(p[0], p[1])
    }
    ctx.closePath()
    ctx.stroke()
}
function point(x, y, r, d) {
    let x1 = r * Math.cos(d * Math.PI / 180) + x
    let y1 = r * Math.sin(d * Math.PI / 180) + y
    return [x1, y1]
}
function init() {
    tris = []
    tris.push(new tri(canvas.width / 2, canvas.height / 2, canvas.width / 2, -90))
    count = 480
}
init()
function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    for (i in tris) {
        t = tris[i]
        t.update()
        ctx.strokeStyle = "rgba(0,0,0," + t.opt / 60 + ")"
        t.draw()
        if (t.td == t.d + 60 && t.r > 10 && t.act) {
            for (let j = 0; j < 6; j++) {
                let nr = t.r * 2 / 3
                let d = t.d + j * 60
                let x1 = nr * Math.cos(d * Math.PI / 180) + t.x
                let y1 = nr * Math.sin(d * Math.PI / 180) + t.y
                let r1 = t.r / 3
                tris.push(new tri(x1, y1, r1, d))
                t.act = false
            }

        }
    }
    count--
    if (count < 0) {
        init()
    }
}
setInterval(draw, 1000 / 60)
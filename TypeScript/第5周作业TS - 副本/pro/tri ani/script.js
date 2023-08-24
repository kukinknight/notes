let canvas = document.getElementById("canvas")
canvas.width = window.innerWidth
canvas.height = window.innerHeight
let ctx = canvas.getContext("2d")
let triangles = []
class trigle {
    constructor(x, y, d, r) {
        this.x = x
        this.y = y
        this.d = d
        this.r = r
        this.age = 100
    }
    update() {
        this.age--
        if (this.age == 96) {
            let next = Math.round(Math.random()) * 2 - 1
            let d = next * Math.PI / 3 + this.d
            let x = this.r * Math.cos(d) + this.x
            let y = this.r * Math.sin(d) + this.y
            if (!(x < 0 || x > canvas.width || y < 0 || y > canvas.height)) {
                triangles.push(new trigle(x, y, d, this.r))
            }
        }
    }
    draw() {
        ctx.beginPath()
        for (let i = 0; i < 3; i++) {
            let x = this.r * Math.cos(this.d + Math.PI * 2 / 3 * i) + this.x
            let y = this.r * Math.sin(this.d + Math.PI * 2 / 3 * i) + this.y
            ctx.lineTo(x, y)
        }
        ctx.closePath()
        ctx.fillStyle = "rgba(30,144,255," + this.age / 100 + ")"
        ctx.fill()
        ctx.strokeStyle = "rgba(255,255,255," + this.age / 100 + ")"
        ctx.stroke()
    }

}
function ani() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    if (triangles.length == 0) {
        triangles.push(new trigle(
            Math.random() * canvas.width,
            Math.random() * canvas.height,
            0,
            30
        ))
    }
    for (let i in triangles) {
        let t = triangles[i]
        if (t.age < 0) {
            triangles.splice(i, 1)
        }
        t.draw()
        t.update()
    }
}
setInterval(() => {
    ani()
}, 100 / 6);
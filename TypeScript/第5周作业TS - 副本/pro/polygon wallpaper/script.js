let canvas = document.getElementById("canvas")
canvas.width = window.innerWidth
canvas.height = window.innerHeight
let ctx = canvas.getContext("2d")
let polygons = []
let ps = 6
let r = 25
let max = Math.sqrt(
    Math.pow(canvas.width / 2, 2) +
    Math.pow(canvas.height / 2, 2)

)
class polygon {
    constructor(x, y, d) {
        this.x = x
        this.y = y
        this.d = d
        let hsl = Math.sqrt(
            Math.pow(this.x - canvas.width / 2, 2) +
            Math.pow(this.y - canvas.height / 2, 2)
        ) / max * 360
        this.color = "hsla(" + hsl + ",80%,50%,0.8)"
    }
    update() {
        // this.d += Math.PI / 180
    }
    draw() {
        ctx.fillStyle = this.color
        ctx.beginPath()
        for (let i = 0; i < ps; i++) {
            let x = r * Math.cos(i * Math.PI * 2 / ps + this.d) + this.x
            let y = r * Math.sin(i * Math.PI * 2 / ps + this.d) + this.y
            ctx.lineTo(x, y)
        }
        ctx.closePath()
        ctx.fill()
        ctx.stroke()
    }
}

function init() {
    let d = -Math.PI / 2
    let x = 0
    let y = 0
    let sw = 0
    switch (ps) {
        case 3:
            sw = r * Math.sin(Math.PI / 3)
            for (w = 0; w < canvas.width / sw + 2; w++) {
                for (h = 0; h < canvas.height / sw + 1; h++) {
                    x = w * sw - (h % 2) * sw
                    y = h * (3 * r / 2) + (w % 2) * r / 2
                    d = Math.PI / 2 - (w % 2) * Math.PI
                    polygons.push(new polygon(x, y, d))
                }
            }
            break
        case 4:
            for (w = 0; w < canvas.width / (r * 2) + 1; w++) {
                for (h = 0; h < canvas.height / r + 1; h++) {
                    x = w * r * 2 + (h % 2) * r
                    y = h * r
                    polygons.push(new polygon(x, y, d))
                }
            }
            break
        case 6:
            for (w = 0; w < canvas.width / (r * 3) + 1; w++) {
                for (h = 0; h < canvas.height / (r * Math.cos(Math.PI / 6)) + 1; h++) {
                    x = w * r * 3 + (h % 2) * 3 * r / 2
                    y = h * r * Math.cos(Math.PI / 6)
                    d = 0
                    polygons.push(new polygon(x, y, d))
                }
            }
            break

        default:
            for (w = 0; w < canvas.width / (r) + 1; w++) {
                for (h = 0; h < canvas.height / (r) + 1; h++) {
                    x = w * r
                    y = h * r
                    polygons.push(new polygon(x, y, d))
                }
            }
    }

}
init()

function ani() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    for (let i in polygons) {
        let p = polygons[i]
        p.update()
        p.draw()
    }
}
setInterval(() => {
    ani()
}, 100 / 6);
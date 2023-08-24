let show = document.querySelector(".count")
let showwheel = document.querySelector(".wheel")
let micro = document.querySelector(".micro")
let start = new Date()
let count = 0
let wheel = 0
showwheel.innerHTML = wheel
show.innerHTML = count
let canvas = document.getElementById("canvas")
canvas.width = 400
canvas.height = 100
let ctx = canvas.getContext("2d")
let delays = []
ctx.fillStyle = "rgba(0,0,255,0.5)"
document.addEventListener("wheel", (evt) => {
    let now = new Date()
    let dif = now.getTime() - start.getTime()
    if (dif > 200) {
        count++
        // start = new Date() //滚动操作触发后刷新
    }
    wheel++
    show.innerHTML = count
    showwheel.innerHTML = wheel
    micro.innerHTML = dif
    delays.push(dif)
    if (delays.length > 200) {
        delays.splice(0, 1)
    }
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.beginPath()
    ctx.moveTo(0, canvas.height / 2)
    ctx.lineTo(canvas.width, canvas.height / 2)
    ctx.stroke()
    for (let i in delays) {
        ctx.fillRect(i * 2, canvas.height, 1, -delays[i] / 4)
    }
    start = new Date() //滚动事件触发刷新
})
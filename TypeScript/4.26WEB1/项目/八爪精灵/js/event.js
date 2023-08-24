
window.addEventListener("resize",  (e) => {
    // 重置canvas的大小
    W = canvas.width = window.innerWidth
    H = canvas.height = window.innerHeight

})

canvas.addEventListener("mousemove", (e) => {
    // 记录上一次的鼠标位置
    last_mouse.x = mouse.x
    last_mouse.y = mouse.y
    console.log('鼠标移动'+Math.random())
    // 更新点前的鼠标位置
    mouse.x = e.pageX - this.offsetLeft
    mouse.y = e.pageY - this.offsetTop
}, false)

// 监听鼠标离开事件
canvas.addEventListener("mouseleave", (e) => {
    // 将mouse设为false
    console.log('鼠标离开')
    mouse.x = false
    mouse.y = false
})


var cam = document.getElementById("cam")
var cRect = cam.getBoundingClientRect()
var origin = {
    x: cRect.left + 75,
    y: cRect.top + 75
}
var inputs = document.getElementsByTagName("input")
for (var i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener("focus", function() {
        if (document.activeElement.getAttribute("type") == "text") {
            cam.style.color = "#2ed573"
            cam.style.textShadow = "0 0 10px white,0 0 20px white,0 0 40px white"
        } else {
            cam.style.textShadow = "none"
            cam.style.color = "#ff4757"
            cam.style.transform = "rotate(-15deg)"
        }
    })
}
window.addEventListener("mousemove", function(evt) {
    var tx = 0
    var ty = 0
    if (document.activeElement.tagName != "INPUT") {
        tx = evt.x
        ty = evt.y
        cam.style.textShadow = "none"
        cam.style.color = "#2ed573"
        draw(tx, ty)
    }
})

document.activeElement.addEventListener("keyup", function() {
    if (document.activeElement.getAttribute("type") == "text") {
        var tinput = document.activeElement
        var span = document.createElement("span")
        window.document.body.appendChild(span)
        span.style.position = "fixed"
        span.style.fontSize = "25px"
        span.innerHTML = tinput.value
        tx = tinput.getBoundingClientRect().left + 10 + span.clientWidth
        ty = tinput.getBoundingClientRect().top + 10 + 25
        window.document.body.removeChild(span)
        draw(tx, ty)
    }
})

function draw(valx, valy) {
    ex = valx - origin.x
    ey = valy - origin.y
    deg = 360 * Math.atan(ey / ex) / (2 * Math.PI) + 180
    if (ex > 0) {
        deg += 180
    }
    cam.style.transform = "rotate(" + deg + "deg)"
}
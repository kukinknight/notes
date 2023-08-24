let title = document.querySelector(".title")
let titles = ["hello world", "red panda", "welcome", "have a nice day"]
let ind = 0
function show() {
    title.innerHTML = ""
    let string = titles[ind]
    for (var i in string) {
        let span = document.createElement("span")
        span.innerText = string[i]
        span.style.setProperty("--d", Math.random() + 1)
        title.appendChild(span)
    }
    ind++
    ind = ind % titles.length
}
show()

// setInterval(show, 5000)
document.addEventListener("click", function () {
    show()
})
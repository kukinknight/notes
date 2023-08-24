var locker = document.getElementsByClassName("lock")[0]
var input = document.getElementsByTagName("input")[0]
input.addEventListener("keyup", function () {
    if (input.value == "1234") {
        locker.style.setProperty("--c", "#2ed573")
        locker.style.setProperty("--u", "-10px")
    }
    else {
        locker.style.setProperty("--c", "#ff4757")
        locker.style.setProperty("--u", "0px")
    }
})
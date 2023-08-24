let xmlhttp = new XMLHttpRequest()
xmlhttp.open("GET", "data2.xml", false)
xmlhttp.send()
let xmlDoc = xmlhttp.responseXML
let record = xmlDoc.getElementsByTagName("record")
let countrys = []
let countryselector = document.getElementById("countryselect")
let w = 800
let h = 400
let canvas = document.getElementById("canvas")
canvas.width = w
canvas.height = h
let ctx = canvas.getContext("2d")


function init() {
    let h1 = document.getElementById("title")
    h1.innerHTML = record[0].getElementsByTagName("field")[1].innerHTML
    for (let i = 0; i < record.length; i++) {
        let r = record[i]
        let nodes = r.getElementsByTagName("field")
        let countryname = nodes[0].innerHTML
        if (!countrys.includes(countryname) && countryname != "") {
            countrys.push(countryname)
        }

    }
    for (let i in countrys) {
        let op = document.createElement("option")
        op.innerHTML = countrys[i]
        countryselector.appendChild(op)
    }
}
init()



countryselector.addEventListener("change", function(e) {
    let ind = countryselector.selectedIndex
    let text = countryselector.options[ind].text
    getData(text)
})

function getData(str) {

    let data = []
    for (let i = 0; i < record.length; i++) {
        let r = record[i]
        let nodes = r.getElementsByTagName("field")
        let name = nodes[0].innerHTML
        if (name == str) {
            data.push({
                year: nodes[2].innerHTML,
                val: nodes[3].innerHTML
            })
        }
    }
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.beginPath()
    ctx.strokeStyle = "gray"
    for (let i = 0; i < 5; i++) {
        ctx.moveTo(0, h / 5 * i)
        ctx.lineTo(w, h / 5 * i)
    }
    ctx.stroke()
    for (let i in data) {
        ctx.fillStyle = "rgba(0,0,0,0.3)"
        ctx.fillRect(w / data.length * i + 1, h - data[i].val * h / 100 - 1, 4, h)
        ctx.fillStyle = "rgba(0,244,0,0.8)"
        ctx.fillRect(w / data.length * i, h - data[i].val * h / 100, 4, h)
    }
    let years = document.getElementById("years")
    years.innerHTML = data[0].year + "-" + data[data.length - 1].year
}
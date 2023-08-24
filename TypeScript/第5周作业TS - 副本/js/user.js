const getFolderNames = require('../index')
const res = getFolderNames()




let a = ''
for (let one of res) {
  a += `
        <a href="../pro/${one}.html" target="_blank">
            ${one}
        </a>
 `
}
app.innerHTML = html
let picArr = document.querySelectorAll('a')

let config = "height=900, width=600, top=100, left=100, toolbar=no, menubar=no,scrollbars=no,resizable=no, location=no, status=no"
for (let i = 0; i < picArr.length; i++) {
  picArr[i].onclick = function (e) {
    let url = this.href
    let me = window.open(url, "newW", config)  //打开新窗口
    return false
  }

}


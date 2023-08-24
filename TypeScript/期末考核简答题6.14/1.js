const cherrio = require('cheerio')
let URL = `https://emojixd.com/list#h-food-drink`
async function test() {
  let 请求 = await fetch(URL)
  let HTML = await 请求.text()

  const $ = cherrio.load(HTML)
  let arr = $('.emoji.left.mr2.h1')
  let 内容 = ''
  arr.each(function (i, e) {
    内容 += $(e).text()
  })
  console.log(内容)
}
test()

const path = require('path')
// const fs = require('fs')

//__dirname显示当前文件所在路径
// console.log(__dirname)
//path join的使用
const str =path.join('c:\\a','\\b','c.txt')
console.log(str)

const dx = path.join('/a','/b','../','/c')
console.log(dx)
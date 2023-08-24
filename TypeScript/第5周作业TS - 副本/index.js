// const fs = require('fs')
// const path = require('path')
// function getFolderNames() {
//   const folderPath = path.join(__dirname, 'pro')
//   return new Promise((resolve, reject) => {
//     fs.readdir(folderPath, (err, files) => {
//       if (err) return reject(err) // 失败
//       const folderNames = files.filter(file => fs.statSync(path.join(folderPath, file)).isDirectory())
//       resolve(folderNames) // 成功
//     })
//   })
// }


// 法2
// const path = require('path')
// const fs = require('fs')
// async function getFolderNames() {
//   const folderPath = path.join(__dirname, 'pro')
//   const folderNames = []

//   const files = await fs.promises.readdir(folderPath)
//   for (const file of files) {
//     const fullPath = path.join(folderPath, file)
//     const stat = await fs.promises.stat(fullPath)
//     if (stat.isDirectory()) {
//       folderNames.push(file)
//     }
//   }
//   return folderNames
// }
// // 调用函数，获取文件夹名称的数组
// getFolderNames().then(folderNames => {
//   console.log(folderNames.length) // 输出数组
// }).catch(err => {
//   console.error(err)
// })
// getFolderNames()



// 封装函数获取目录下的所有文件夹名称
async function getFolderNames() {

  const fs = require('fs')

  const path = require('path')
  
  const directoryPath = path.join(__dirname, 'pro')
  /**
   ***path <string> | <Buffer> | <URL>
    *options <string> | <Object>
    *encoding <string> 默认值: 'utf8'
    *withFileTypes <boolean> 默认值: false
    *返回: <Promise> 使用目录中文件的名称数组
   * **/ 
  const files = await fs.promises.readdir(directoryPath, { withFileTypes: true })
  const folderNames = files.filter(file => file.isDirectory()).map(folder => folder.name)
  console.log(folderNames)
  return folderNames
}
getFolderNames()
// module.exports = getFolderNames



const fs = require('fs')

fs.readFile('成绩整理.txt','utf8',function(err,dataStr){
    if(err==null){
        console.log(dataStr)
    }else{
        console.log('读取有误')
    }
     const newarr=[]
    const arrold=dataStr.split(' ')
    arrold.forEach(function(V){
        newarr.push(V.replace('=',':'))
    })
    const str = newarr.join('\r\n')

    fs.writeFile('成绩整理.txt',str,function(err){
        if(err){
          return console.log('文件写入失败' + err.message)
          }
          console.log('文件写入成功')
    
    })
    
})


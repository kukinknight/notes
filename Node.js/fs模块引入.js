const fs = require('fs')

fs.readFile('test.txt','utf8',function(err,dataStr){
    if(err==null){
        console.log(dataStr)
    }else{
        console.log('读取有误')
    }
        
    }
)

fs.writeFile('test.txt',你好,function(err){
    if(err){
      return console.log('文件写入失败' + err.message)
      }
      console.log('文件写入成功')

})
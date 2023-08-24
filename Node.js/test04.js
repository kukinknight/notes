const mysql=require('mysql')

const client=mysql.createConnection({
    host:'127.0.0.1',
    port:'3306',
    user:'root',
    password:'123456',
    database:'myschool'
})

client.connect(function(err){
    if(err){
        console.log('链接未成功'+err)
        return
    }
    console.log('mysql数据库连接成功')
})


client.query('select*from student',function(error,result){
    if(error){
        console.log('sql有错误')
    }else{
        console.log(result)
    }
})


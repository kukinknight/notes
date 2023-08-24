const express = require('express')
const fs = require('fs')
const mysql = require('mysql');
const ejs = require('ejs')
const bodyParser = require('body-parser');
const { urlencoded } = require('express');

//连接数据库
const client=mysql.createConnection({
    host:'127.0.0.1',
    port:'3306',
    user:'root',
    password:'123456',
    database:'myschool'
})

//判断数据库是否连接成功
client.connect(function(err){
    if(err){
        console.log('链接不成功'+err)
        return
    }

    console.log('数据连接成功')
})

//创建服务器
const app = express()

//注册路由-用来给body属性挂载数据
app.use(bodyParser,urlencoded({extended:false}))

//启动服务
app.listen(8081,function(){
    console.log('http://127.0.0.1:8081')
})

//路由映射函数
//http://127.0.0.1:8081/queryStu
app.get('/queryStu',function(req,res){
    fs.readFile('./studentlist.html','utf8',function(error,data){

        client.query('select * from student',function(err,result){
           res.send(ejs.render(data,{
               data:result
           }))
        
           
        })
    })
})

//处理数据 增 删 改 查
client.query('select * from student',function(err,result){
       if(err){
        console.log('查询失败')
       }else{
        console.log(result)
       }
})

//增加学生信息跳转页面
app.get('/insert',function(req,res){
    fs.readFile('/addStu.html','utf8',function(error,data){
        res.send(data);
    })
})

app.post('/addStu',function(req,res){
       var body=req.body
       client.query('INSERT INTO student(stuid,name,age) VALUES(?,?,?)',
         [body.stuid,body.name,body.age],function(){
            res.redirect('/queryStu')
         } )
})

app.get('del/:id',function(req,res){
    client.query('DELETE FROM student WHERE stuid=?',[req.params.stuid],function(){
        res.readirect('/queryStu')
    })
})

//修改反填数据
app.get('/edit/:id',function(){
    fs.readFile('edit.html','utf8',function(err,data){
        client.query('SELECT * FROM student WHERE student=?',[req.params.stuid],function(error,result){
            res.send(ejs.rander(data,{data:result[0]}))
        })
    })
})

app.post('/edit',function(req,res){
    var body =req.body
    client.query('UPDATE student SET name=?,age=? WHERE stuid=1')
})
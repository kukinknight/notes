const express = require('express')
const fs = require('fs')//读写
const mysql =require('mysql')
const ejs = require('ejs')  //再html页面写脚本并解析页面的js
const bodyParser = require('body-parser')




const client = mysql.createConnection({
    host:'localhost',
    port:'3306',
    user:'root',
    
    password:'123456',
    database:'myschool'
})
//判断数据库是否连接成功
client.connect(function(err){
    if(err){
        console.log('连接未成功'+err)
        return
    }
    console.log('mysql数据连接成功')
})

//处理数据 增 删 改 查
//创建服务器
const app =express()
//注册路由-用来给body属性挂载数据
app.use(bodyParser.urlencoded({extended:false}))
//启动服务器
app.listen(8080,function(){
    console.log('启动http://127.0.0.1:8080/user/list')
})

//路由映射函数
app.get('/user/list',function(req,res){
    //原生fs控制页面
    fs.readFile("./studentlist.html",'utf-8',function(error,data){
        //查询数据库里面的数据
        client.query('select * from student',function(err,result){
            //利用ejs模块来传输入
            res.send(ejs.render(data,{
                data:result
            }))
        })
    })
})

//增加学生信息的跳转
app.get('/insert',function(req,res){
    fs.readFile('./add.html','utf-8',function(error,data){
        res.send(data);
    })
})


//获取删除的id 127.0.0.1:8080/del/
//'/del/:id'
app.get('/del',function(req,res){
    var userAddSql0 =   'DELETE FROM student WHERE stuid = ?'
    var userAddSql_Params0 = [req.query.id]
    client.query(userAddSql0,userAddSql_Params0,function(){
        res.send({
            status:200,
            msg:'删除成功'
        })

    })

   /*  var userAddSql0 =   'DELETE FROM sty WHERE stuid = ?'
    var userAddSql_Params0 = [req.params.id]
    client.query(userAddSql0,userAddSql_Params0,function(){
        res.redirect('/user/list')
    }) */
    
})


//修改页面
app.get('/edit/:id',function(req,res){
    fs.readFile('./edit.html','utf-8',function(err,data){
        //执行sql
        var userAddSql1 =   'SELECT * FROM student WHERE stuid = ?'
        var userAddSql_Params1 =    [req.params.id]
        client.query(userAddSql1,userAddSql_Params1,function(error,result){
            res.send(ejs.render(data,{data:result[0]}))
        })
    })
})

//修改值
 app.post('/edit/:id',function(req,res){
    var body = req.body
    var ID = req.params.id
    console.log(`修改了id为${ID}的数据`)
    var userAddSq2 = 'UPDATE student SET name = ?,age= ? WHERE stuid = ?'
    var userAddSql_Params2 = [body.age,body.name]
    client.query(userAddSq2,userAddSql_Params2,function(){
        res.redirect('/user/list')
    })
})  

//把addstu里的值返回到redirect    
app.post('/addstu',function(req,res){
    var body = req.body
    console.log(body)
    var userAddSql = 'INSERT INTO student(stuid,name,age) VALUES(?,?,?)'
    var userAddSql_Params = [body.stuid,body.name,body.age]
    //执行mysql里的指令增删值,VALUES()//表示存入的数据,数据,执行函数 返回/user/list地址
    client.query(userAddSql,userAddSql_Params,function(err,result){
        res.redirect('/user/list')
    })
}) 


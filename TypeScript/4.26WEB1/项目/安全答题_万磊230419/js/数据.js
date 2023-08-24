/*
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2023-04-15 10:05:09
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2023-04-19 15:34:50
 * @FilePath: \课程\TypeScript程序设计\04.12\微信答题页面\js\数据.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
let 题目 =  'https://iptv.hbtv.com.cn/wxcms3/iptv-answering/api/v1/questionnaire/owwX5spLGlWlQeT2Z6clGdNpHvGY?type=all'
let 月排行 = 'https://iptv.hbtv.com.cn/wxcms3/iptv-answering/api/v1/rank/month'
let 周排行 = 'https://iptv.hbtv.com.cn/wxcms3/iptv-answering/api/v1/rank/week'
let 组织排行 ='https://iptv.hbtv.com.cn/wxcms3/iptv-answering/api/v1/rank/org'
let 个人信息 ='https://iptv.hbtv.com.cn/wxcms3/iptv-answering/api/v1/user/owwX5spLGlWlQeT2Z6clGdNpHvGY'
let 月数据 = ''
let 周数据 =''
let 组织数据 =''
let 题目数据 =''

let 视频 =[]
getData();
var ulrs = 'https://iptv.hbtv.com.cn/wxcms3/iptv-answering/api/v1'
async function getData(){
    let 请求  =await fetch(个人信息)//发起网络请求
    let json  = await 请求.json()
    console.log(json)
    document.querySelector('.boxs').innerHTML = `
    <img src="${json.data.wxInfo.avatar}" alt="">
    <div>
    <span>${json.data.name}</span><span>分数:${json.data.totalScore}</span>
    <p>${json.data.orgName}</p>
    </div>
    `
    let 月请求  =await fetch(月排行)//发起网络请求
    let json1  = await 月请求.json()
    月数据 = json1

    let 周请求  =await fetch(周排行)//发起网络请求
    周数据  = await 周请求.json()

    let 组织请求  =await fetch(组织排行)//发起网络请求
    组织数据  = await 组织请求.json()

    let 题目请求  =await fetch(题目)//发起网络请求
    题目数据  = await 题目请求.json()
    let timu = ``
    for(var i = 0;i<json1.data.length;i++){
        timu += `
        <tr>
        <td>${i+1}</td>
        <td>${json1.data[i].userName}</td>
        <td>${json1.data[i].totalScore}</td>
        </tr>
        `
    }
    document.querySelector('.box2-1').innerHTML = `
         <span classList="B">排名</span><span classList="B">用户</span><span classList="B">得分</span>
         <table border="0" cellspacing="0" cellpadding="0" >
           ${timu}
         </table>
    `

}
document.querySelectorAll('.A')[0].onclick = function(){
    document.querySelectorAll('.A')[0].classList.add('yxz')
    document.querySelectorAll('.A')[1].classList.remove('yxz')
    document.querySelectorAll('.A')[2].classList.remove('yxz')
    var json1 = 月数据
    let timu = ``
    for(var i = 0;i<json1.data.length;i++){
        timu += `
        <tr>
        <td>${i+1}</td>
        <td>${json1.data[i].userName}</td>
        <td>${json1.data[i].totalScore}</td>
        </tr>
        `
    }
    document.querySelector('.box2-1').innerHTML = `
         <span classList="B">排名</span><span classList="B">用户</span><span classList="B">得分</span>
         <table border="0" cellspacing="0" cellpadding="0" >
           ${timu}
         </table>
         `
}

document.querySelectorAll('.A')[1].onclick = function(){
    document.querySelectorAll('.A')[1].classList.add('yxz')
    document.querySelectorAll('.A')[0].classList.remove('yxz')
    document.querySelectorAll('.A')[2].classList.remove('yxz')
    var json1 = 周数据
    let timu = ``
    for(var i = 0;i<json1.data.length;i++){
        timu += `
        <tr>
        <td>${i+1}</td>
        <td>${json1.data[i].userName}</td>
        <td>${json1.data[i].totalScore}</td>
        </tr>
        `
    }
    document.querySelector('.box2-1').innerHTML = `
         <span classList="B">排名</span><span classList="B">用户</span><span classList="B">得分</span>
         <table border="0" cellspacing="0" cellpadding="0" >
           ${timu}
         </table>
         `
}

document.querySelectorAll('.A')[2].onclick = function(){
    document.querySelectorAll('.A')[2].classList.add('yxz')
    document.querySelectorAll('.A')[0].classList.remove('yxz')
    document.querySelectorAll('.A')[1].classList.remove('yxz')
    var json1 = 组织数据
    let timu = ``
    for(var i = 0;i<json1.data.length;i++){
        timu += `
        <tr>
        <td>${i+1}</td>
        <td>${json1.data[i].orgName}</td>
        <td>${json1.data[i].totalScore}</td>
        </tr>
        `
    }
    document.querySelector('.box2-1').innerHTML = `
         <span classList="B">排名</span><span classList="B">组织名称</span><span classList="B">得分</span>
         <table border="0" cellspacing="0" cellpadding="0" >
           ${timu}
         </table>
         `
}
    document.querySelectorAll('.bs')[0].onclick = function(){
    document.getElementById('my').style = "display:none"
    document.getElementById('my1').style = "display:none"
    document.getElementById('my2').style = "display:block"
    console.log(题目数据)
    let a = 1;
    for(var i = 9;i<=1119;i+=10){
      视频.push(题目数据.data[i].media[0].src)
      console.log(a)
      console.log(题目数据.data[i].media[0].src)
      a++
    }
    timu();
}
let 题数 = 0;
function get(){
  document.getElementById('my').style = "display:block"
  document.getElementById('my1').style = "display:block"
  document.getElementById('my2').style = "display:none"
  题数=0;
}
function get1(){
  题数 +=1;
  timu();
}
function timu(){
  switch(题目数据.data[题数].type){
    case '1':
      单选题(题目数据.data[题数]);
    break;
    case '3':
      题数 +=1;
      timu();
      // 多选题(题目数据.data[题数]);
    break;
    case '4':
      题数 +=1;
      timu();
      // 填空题(题目数据.data[题数]);
    break;
  }
}
var div = document.querySelectorAll('.box3-1')[0]
function 单选题(t){
    div.innerHTML=`
    <p>${题数+1}/${题目数据.data.length}题</p>
     <p><span>单选题:</span>${t.title}</p>
     <p onclick="daan('A')" id="p1"><span>${t.answerSheet[0].value}</span>${t.answerSheet[0].name}</p>
     <p onclick="daan('B')" id="p2"><span>${t.answerSheet[1].value}</span>${t.answerSheet[1].name}</p>
     <p onclick="daan('C')" id="p3"><span>${t.answerSheet[2].value}</span>${t.answerSheet[2].name}</p>
     <p onclick="daan('D')" id="p4"><span>${t.answerSheet[3].value}</span>${t.answerSheet[3].name}</p>
     <p id="da"></p>
     <div>
        <button onclick="get();" style="margin-right: 226px;">返回首页</button><button onclick="get1();">下一题</button>
     </div>
    `
}
function daan(i){
      document.getElementById('p1').style = 'background-color: #fff'
      document.getElementById('p2').style = 'background-color: #fff'
      document.getElementById('p3').style = 'background-color: #fff'
      document.getElementById('p4').style = 'background-color: #fff'
      if(i==题目数据.data[题数].answer){
        document.querySelectorAll('#da')[0].innerHTML=`恭喜你答对了`
        switch(i){
          case 'A':
            document.getElementById('p1').style = 'background-color: rgb(142, 205, 17)'
          break;
          case 'B':
            document.getElementById('p2').style = 'background-color: rgb(142, 205, 17)'
          break;
          case 'C':
            document.getElementById('p3').style = 'background-color: rgb(142, 205, 17)'
          break;
          case 'D':
            document.getElementById('p4').style = 'background-color: rgb(142, 205, 17)'
          break;
        }
        setTimeout(function(){
          get1();
        },1000)
      }else{
        document.querySelectorAll('#da')[0].innerHTML=`
        你的答案：<span style="color:red">${i}</span>正确答案：<span style="color:red">${题目数据.data[题数].answer}</span>`
        switch(i){
          case 'A':
            document.getElementById('p1').style = 'background-color: #d31e27;'
          break;
          case 'B':
            document.getElementById('p2').style = 'background-color: #d31e27;'
          break;
          case 'C':
            document.getElementById('p3').style = 'background-color: #d31e27;'
          break;
          case 'D':
            document.getElementById('p4').style = 'background-color: #d31e27;'
          break;
        }
      }
}


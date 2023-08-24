//AJAX  Fetch  Axios

getData()   //主函数

async function getData(){
    let 请求  = await fetch('./姓名/data.json')//发起网络请求
    let json  = await 请求.json()    //将文本格式转换成JSON 
    let t = ``  //存放一个题目的数据 
    let html  = ``
    // @@@@@@ 任务一 获取一个题目 
    // 1. Array.find函数常规写法 
    let id = 504 
    // t = json.data.find(function(obj){
    //     let flag = false
    //     if(obj.id ===id){
    //         flag = true;
    //     }
    //     return flag;
    // })

    // 2. Array.find函数ES6(2015年)写法  箭头函数 谓词函数作参数
 

    html = 判断题型(t)

    //@@@@@@ 任务二 获取所有的题目 for 循环
    // for(let i=0 ; i<1120 ; i++){
    //     t = json.data[i] // 1120个题目
    //     html  = html +  判断题型(t) // 简写 html += setT(t)
    // }

    my.innerHTML = html //用生成的HTML替换 id="my" 中的内容
}//getData


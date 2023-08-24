// 要求: 1.实现并测试题目的选项随机函数
// 要求: 2.使用node 1 测试运行至少3次结果 
let 题目 = {
    title: '我是题目',//题目
    optionArr: [],//待完成 补充2个正确选项 ✔  2个✖
    rightArr: [] //待完成  补充正确答案 
}

function 随机选项(题目){    
    //待完成

    


}


//打乱数组arr
function shuffle(arr) {
    var l = arr.length
    var index, temp
    while (l > 0) {
        index = Math.floor(Math.random() * l)
        temp = arr[l - 1]
        arr[l - 1] = arr[index]
        arr[index] = temp
        l--
    }
    return arr
}
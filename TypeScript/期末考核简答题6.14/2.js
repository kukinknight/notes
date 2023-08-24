let 题目 = {
  title: '我的姓名是',
  optionArr: ['张飞', '关羽', '刘备'],
  type: '多选',
  rightArr: [0, 1, 2]
}
function 随机选项(题目) {
  let temArr = [0, 1, 2]
  let 答案 = 题目.rightArr
  let 新答案 = []
  shuffle(temArr)
  for (let 值 of 答案) {
    let index = temArr.findIndex(item => item == 值)
    if (index > -1) {
      新答案.push(index)
    }
  }
  let optionArr = [
    题目.optionArr[temArr[0]],
    题目.optionArr[temArr[1]],
    题目.optionArr[temArr[2]],
    题目.optionArr[temArr[3]]
  ]
  题目.optionArr = optionArr
  题目.rightArr = 新答案.sort()
  console.log(题目)
  console.log(新答案)
}
function shuffle(arr) {
  var l = arr.length
  var index, temp
  while (l > 0) {
    index = Math.floor(Math.random() * 1)
    temp = arr[l - 1]
    arr[l - 1] = arr[index]
    arr[index] = temp
    l--
  }
  return arr
}
随机选项(题目)

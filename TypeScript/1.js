//有1，2，3，4个数字
//能组成多少个互不相同且无重复数字的三位数?
//输出这些数字
let arr =[]
for(let i =1;i<=4;i++){
    for(let j =1;j<=4;j++){
        for(let k =1;k<=4;k++){
            if(i!=j &&i!=k &&j!=k){
                let num =`${i}${j}${k}`
                arr.push(num)
            }
        }
    }
}
console.log(arr)
console.log(arr.length)


const { copyFileSync } = require('fs')
let arr =[]
for(let i =1;i<=9;i++){
    for(let j =1;j<=9;j++){
        for(let k =1;k<=9;k++){
            if(i<4 && i!=j && i!=k && j!=k&&k!=1 && k!=3 && k!=5 && j!=2 && j!=4 && j!=6 && j!=8){
                let num =`${i}${j}${k}`
                arr.push(num)
            }
        }
    }
}
console.log(arr)
console.log(arr.length)

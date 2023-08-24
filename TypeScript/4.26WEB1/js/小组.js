function 绘制小组(arr){
            
    let imgArr = [
        document.querySelector('#'+arr[0]),
        document.querySelector('#'+arr[1]),
        document.querySelector('#'+arr[2]),
        document.querySelector('#'+arr[3])
    ]  // 存放组员的头像

    // let arr =[]
    let img1 = imgArr[0]
    let x = 1000*Math.random()
    let y = 1000*Math.random()
    let 组长 = new 圆头像(img1,x,y,50)
    arr.push(
        组长,
        new 圆头像(imgArr[0],x-100,y),
        new 圆头像(imgArr[1],x+100,y),
         new 圆头像(imgArr[2],x,y-100)
    )
    for(let 组员 of arr){
        组员.起始角度(组长)
    }
}
function 绘图小组(组长,arr){
    const rainbowColors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

    for(let i =0;i<arr.length;i++){
       let 组员 =arr[i]
        组员.线(c2d,组员,组长,rainbowColors[i])
        
        // 组员.运动()
        组员.画(c2d)
        组员.圆周运动(组长)
    }
    组长.画(c2d)
}
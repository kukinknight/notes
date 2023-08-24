// 定义 tentacle 类 触角
class 触手 {
    // 构造函数，用于初始化 tentacle 对象
    constructor(x, y, l, n, a) {
        // 设置触手的顶部位置坐标
        this.x = x
        this.y = y
        // 设置触手的长度
        this.len = l
        // 设置触手的段数
        this.n = n
        // 初始化触手的目标点对象
        this.目标点 = {}
        // 设置触手的随机移动参数
        this.rand = Math.random()
        // 创建触手的第一条段
        let segLen = this.len / this.n
        let first = new 小节(this,segLen , true)
        this.segArr = [first]
        // 创建其他的段
        for (let i = 1; i < this.n; i++) {
            let one = this.segArr[i - 1]
            let other =  new 小节(one, segLen, false)  
            this.segArr.push(other)
        }
        console.log(this.segArr)
        this.p ={
            x:this.x,
            y:this.y
        }
    }//constructor

    // 移动触手到目标点的方法
    move(oldPoint, newPoint) {
        // 计算触手顶部与目标点的角度

        //atan2() 返回从原点(0,0) 到 (x,y) 点的线段与 x 轴正方向之间的平面角度(弧度值)，
        //也就是 Math.atan2(y,x)。
        this.angle = Math.atan2(newPoint.y - this.y, newPoint.x - this.x)
        // 计算触手的距离参数
        this.dt = dist(oldPoint, newPoint)
        // 计算触手的目标点坐标
        this.目标点 = {
            x: newPoint.x - 0.8 * this.dt * Math.cos(this.angle),
            y: newPoint.y - 0.8 * this.dt * Math.sin(this.angle)
        }
        // 如果计算出了目标点，则更新最后一个segment对象的位置坐标
        // 否则，更新最后一个segment对象的位置坐标为目标点坐标
        if (this.目标点.x) {
            this.segArr[this.n - 1].update(this.目标点)
        } else {
            this.segArr[this.n - 1].update(newPoint)
        }
        // 遍历所有segment对象，更新它们的位置坐标
        for (let i = this.n - 2; i >= 0; i--) {
            this.segArr[i].update(this.segArr[i + 1].pos)
        }

        if (
            dist(this.p , newPoint) <= this.len + this.dt
        ) {
            this.segArr[0].初始位置({ x: this.x, y: this.y })
            for (let i = 1; i < this.n; i++) {
                this.segArr[i].初始位置(this.segArr[i - 1].nextPos)
            }
        }
    }//move

    showHand(newPoint) {
        //在触手的范围内
        // 如果触手与目标点的距离小于触手的长度，则绘制触手
        if (dist(this.p, newPoint) <= this.len) {
            //色相H  饱和度S  亮度 L
            let H = this.rand * 60 + 180
            let L = this.rand * 60 + 25
            this.画线(H,L)
        }
    }//show

    // 绘制触手的圆形头的方法
    showPoint(newPoint) {
        // 开始新路径
        let color = "palegreen" //white
        let radius = this.rand *2 +1
        
        const distance = dist(this.p, newPoint);
        if(distance <= this.len){   //触手范围内点的颜色
            color = "darkcyan" // 天蓝色
            radius = this.rand *2 
        }

        this.画圆(radius,color)
        
    }

    画线(H,L){
        // 设置全局合成操作为lighter
        c2d.globalCompositeOperation = "lighter"
        
        // 开始新路径
        c2d.beginPath()
        // 从触手起始位置开始绘制线条
        c2d.moveTo(this.x, this.y)
        // 遍历所有的segment对象，并使用他们的show方法绘制线条
        for (let i = 0; i < 30; i++) {
            this.segArr[i].lineTo()
        }
        c2d.strokeStyle = `hsl(${H} ,100%,${L}%)`
            
        c2d.lineWidth = this.rand * 2
        c2d.lineCap = "round"
        c2d.lineJoin = "round"
        c2d.stroke()
        c2d.globalCompositeOperation = "source-over"
        c2d.closePath()
    }


    画圆(radius,color){

        c2d.beginPath()
        c2d.arc(this.x, this.y, radius, 0, 2 * Math.PI);
        c2d.fillStyle=color
        c2d.closePath()
        c2d.fill()
    }
    
}//tentacle
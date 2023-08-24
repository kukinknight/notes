 // 定义 segment 类
class 小节 {
    // 构造函数，用于初始化 segment 对象
    constructor(parent, segLen,  isFirst, 弧度=0) {

        // 设置segment的长度和角度
        this.segLen = segLen  // 1.66~13.33 
        this.弧度 = 弧度
        // 如果是第一条触手段，则位置坐标为触手顶部位置
        // 否则位置坐标为上一个segment对象的nextPos坐标
        
        this.pos = {
            x: isFirst ? parent.x : parent.nextPos.x,
            y: isFirst ? parent.y : parent.nextPos.y,
        }

        // 计算下一个segment的坐标位置
        this.setNextPos()
        // this.nextPos.x = this.pos.x + 1*this.segLen 
        // this.nextPos.x = this.pos.y + 0*this.segLen 
    }//constructor
    
    画圆(x,y,radius=1,color='gray'){
        c2d.beginPath()
        c2d.arc(x, y, radius, 0, 2 * Math.PI);
        c2d.fillStyle=color
        c2d.closePath()
        c2d.fill()
    }

    setNextPos(){
        this.nextPos = {
            x: this.pos.x + this.segLen * Math.cos(this.弧度),
            y: this.pos.y + this.segLen * Math.sin(this.弧度),
        }
        //this.画圆(this.nextPos.x,this.nextPos.y)
    }

    // 更新segment位置的方法
    update(t) {
        
        // 计算segment与目标点的角度
        this.弧度 = Math.atan2(t.y - this.pos.y, t.x - this.pos.x)
        // 根据目标点和角度更新位置坐标
        this.pos.x = t.x + this.segLen * Math.cos(this.弧度 - Math.PI)
        this.pos.y = t.y + this.segLen * Math.sin(this.弧度 - Math.PI)
        // 根据新的位置坐标更新nextPos坐标
       
        this.setNextPos()
    }

    // 将 segment 回执回初始位置的方法
    初始位置(t) {
        // 将位置坐标设置为目标点坐标
        this.pos.x = t.x
        this.pos.y = t.y
        this.setNextPos()
    }

    lineTo() {
        c2d.lineTo(this.nextPos.x, this.nextPos.y)
    }
}//segment






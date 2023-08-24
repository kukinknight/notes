class Green{
    constructor(x,y,r=10) {
        this.x = x
        this.y = y 
        this.r = r
        this.vx = 3
        this.vy = 3
    }
    
    update(){ //更新飞船的位置
        if(keyObj.左){
            this.x -= this.vx ;
        }
        if(keyObj.右){
            this.x += this.vx ;
        }
        if(keyObj.上){
            this.y -= this.vy ;
        }
        if(keyObj.下){
            this.y += this.vy ;
        }
    }// update
    
    draw(c2d,nowTime){ //画图方法
        this.update();
        let A = this

        c2d.beginPath()
        c2d.arc(A.x,A.y,10,0,Math.PI*2)
        c2d.stroke()
        c2d.closePath()

        //在这个0右上角显示坐标
        c2d.beginPath()
        let str = ``
        c2d.fillText('坐标',A.x+10,A.y-10)
        c2d.closePath()

        //绘制垂直参考线
        c2d.moveTo(A.x,0)
        c2d.lineTo(A.x,canvas.width)
        c2d.stroke()

        //绘制水平参考线
        c2d.moveTo(0,A.y)
        c2d.lineTo(canvas.height,A.y)
        c2d.stroke()
        
        
    }
    
}
class 圆{
    constructor(x, y, color='red',vx=1,vy=1,r=3 ){
        //绘制圆弧 arc(x,y,半径,起始角度,结束角度)
        this.x = x 
        this.y = y
        this.vx =vx
        this.vy =vy
        this.color = color      //设置颜色
        this.r = r               //设置半径
    }

    画(c2d){
        c2d.beginPath();  //开始圆路径
        //绘制圆弧 arc(x,y,半径,起始角度,结束角度)
        c2d.arc(this.x,  this.y,  this.r, 0 ,Math.PI*2)
        c2d.fillStyle = this.color
        c2d.fill()
        c2d.closePath();  //闭合圆路径
    }

    移动(){
        this.x += this.vx;
        this.y += this.vy;

        // Reverse direction if the point hits the edge of the canvas
        if (this.x < 0 || this.x > canvas.width) {
            this.vx = -this.vx;
        }
        if (this.y < 0 || this.y > canvas.height) {
            this.vy = -this.vy;
        }
    }
    
}//圆
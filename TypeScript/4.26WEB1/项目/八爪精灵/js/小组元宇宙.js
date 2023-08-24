
class 圆头像{
    constructor(img,x,y,r=30){
        this.img = img
        this.x = x
        this.y = y
        this.vx = 1
        this.vy = 1

        this.r = r
    }

    画(c2d){
        
        c2d.save();
        c2d.beginPath() //开始路径
        let size = 2 * this.r;  //边长 = 两倍的半径
        c2d.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
        c2d.fill()  //填充
        c2d.closePath() //关闭路径
        c2d.clip();
        c2d.drawImage(
            this.img, 
            this.x - this.r, 
            this.y - this.r, 
            size, 
            size
        );
        c2d.restore();
        
    }
    
    运动(){
        this.vx += Math.random() * 1 - 0.5;
        this.vy += Math.random() * 1 - 0.5;

        this.x +=this.vx;
        this.y +=this.vy;

        if(this.x<0 || this.x >1000){
            this.vx = -this.vx
            
        }
        if(this.y<0 || this.y >1000){
            this.vy = -this.vy
        }

    }//运动

    线(c2d,p1,p2){
        c2d.beginPath()
        c2d.moveTo(p1.x,p1.y)
        c2d.lineTo(p2.x,p2.y)
        c2d.stroke()
        c2d.closePath()
    }

    三次曲线(c2d,p1,p4){
   
        let p2 = {
            x:p4.x*0.9-1,
            y:p1.y*0.9-1
        }
        let p3 = {
            x:p1.x*0.9-1,
            y:p4.y*0.9-1
        }
        c2d.moveTo(p1.x,p1.y)
        c2d.bezierCurveTo(p2.x,p2.y,p3.x,p3.y,p4.x,p4.y)
        c2d.stroke()

    }


}//圆头像
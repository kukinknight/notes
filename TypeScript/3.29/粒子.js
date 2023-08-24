class P {   //粒子类
    constructor(x,y,color='orange'){//构造函数，初始化对象
        
        this.x =this.x0 = x
        this.y =this.y0 = y
        this.vx = 1
        this.vy = 1
        this.ax = 0
        this.ay = 0
        this.r = 3
        this.color = color
        this.go = true

        this.t = 0  //单位毫秒
        
    }


    update(nowTime) {  //更新位移
        let v = this.vx+this.vy

        if(v>10){
            this.r --;
            if(this.r==0){
                this.r=1;
            }
            
            this.vx *=0.8
            this.vy *=0.8
        }else if(v>8){
            //this.color ='orange'
        }else if(v>6){
            //this.color ='green'
            this.r = 5
        }else{
            //this.color ='gray'
        }

        if(this.go){    

            if(nowTime - this.t >0.06 ){
               // console.log(`加速  ${nowTime - this.t}`)
                this.vx += this.ax
                this.vy += this.ay
                this.t = nowTime;
            }

            this.y += this.vy
            this.x += this.vx
        }

    }
    

    // 画线方法
    //(x1,y1) 到 (x2,y2)
    drawLine(x1,y1,x2,y2){ 
        c2d.beginPath()
        c2d.moveTo(x1,y1)
        c2d.lineTo(x2,y2)
        c2d.strokeStyle='gray'
        c2d.stroke()
        c2d.closePath()
    }

    goal(x2,y2){//向着指定目标前进
        //引入了未知的属性

        let dx = x2-this.x 
        let dy = y2-this.y 

        let len = Math.sqrt(dx*dx+dy*dy)  
        
        //console.log(`x2-this.x =${x2-this.x}  dx=${dx} dy=${dy} len=${len}`)

        //如果距离<100，则
        if( len<66 ){
           //画线
            this.drawLine(this.x ,this.y ,x2,y2)
			
            //锁定目标
            this.ax =0
            this.ay =0
            this.vx =dx /100
            this.vy =dy /100
           
        }else{
            let random = Math.random()*0.1
            this.ax = dx  * Math.random() /100 
            this.ay = dy  * Math.random()/100
        }




        if(Math.abs(this.ax)>1){
            this.ax *=0.01
        }
        if(Math.abs(this.ay)>1){
            this.ay *=0.01
        }

    }



    draw(c2d,nowTime) {//画图
        this.update(nowTime)
        c2d.save()
        c2d.beginPath()
        c2d.fillStyle = this.color
        // c2d.画弧(x, y, 半径, 起始角度,结束角度2π, 逆时针1/顺时针0)
        c2d.arc(this.x, this.y, this.r, 0, Math.PI * 2, 0)
        c2d.fill()
        c2d.restore()
    }

}
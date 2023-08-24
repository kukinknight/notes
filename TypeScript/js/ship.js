

class ship{
    constructor(x,y,w,h,vx,vy,color){
        this.x = x;
        this.y =y;
        this.w =w;
        this.h = h;
        this.vx = vx;
        this.vy = vy;
        this.color = color
    }

    draw(c2d){
        this.move()
        c2d.fillstyle = this.color
        c2d.fillRect(this.x,this.y,this.w,this.h)
    }

    move(){
     if(this.x<0 || this.x> c2d.canvas.width - this.w){
        this.vx= -this.vx
     }

     if(this.y<0 || this.y> c2d.canvas.height - this.h){
        this.vy= -this.vy
     }

        this.x +=this.vx*1
        this.y += this.vy*1
    }
}
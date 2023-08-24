class Particle{
    constructor(){
        this.x = Math.random()*canvas.with | 0
        this.y = 0
        this.vx = 0
        this.vy = 1
        this.size = Math.random()*5
        this.color = 'orange'
    }
    update() {
        this.y += this.vy
        this.x += this.vx
        if(this.y>=canvas.height){
            this.y = 0
            this.x = (Math.random()*canvas.with) | 0
        }
        this.vy = Math.random()*0.8*this.size
        this.vx = Math.random()*0.8
    }

    draw(c2d){
        this.update()
        c2d.beginPath()
        c2d.fillStyle = this.color
        c2d.arc(this.x,this.y,this.size,0,Math.PI*2,0)
        c2d.fill()
    }
}
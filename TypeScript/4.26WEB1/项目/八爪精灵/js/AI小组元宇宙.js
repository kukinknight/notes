class CircleAvatar {
    constructor(img, x, y, r = 30, vx = 1, vy = 1, speed = 3, canvasWidth = 1000, canvasHeight = 1000) {
      this.img = img;
      this.x = x;
      this.y = y;
      this.r = r;
      this.vx = vx;
      this.vy = vy;
      this.speed = speed;
      this.canvasWidth = canvasWidth;
      this.canvasHeight = canvasHeight;
      // this.cacheCanvas = document.createElement('canvas');
      // this.cacheCanvas.width = 2 * this.r;
      // this.cacheCanvas.height = 2 * this.r;
      // this.cacheContext = this.cacheCanvas.getContext('2d');
      //this.drawCache();
    }
  
    drawCache() {
      this.cacheContext.beginPath();
      this.cacheContext.arc(this.r, this.r, this.r, 0, 2 * Math.PI);
      this.cacheContext.clip();
      this.cacheContext.drawImage(
        this.img,
        0,
        0,
        2 * this.r,
        2 * this.r
      );
      this.cacheContext.closePath();
    }
  
    draw(c2d) {
      this.move();
      c2d.save();
      c2d.translate(this.x, this.y);
      c2d.rotate(this.angle);
      c2d.drawImage(
        this.img,
        this.x - this.r, 
        this.y - this.r,
        2*this.r,
        2*this.r
      );
      c2d.restore();
    }
  
    move() {
      this.x += this.vx * this.speed;
      this.y += this.vy * this.speed;
      if (this.x - this.r < 0) {
        this.x = this.r;
        this.vx = -this.vx;
      } else if (this.x + this.r > this.canvasWidth) {
        this.x = this.canvasWidth - this.r;
        this.vx = -this.vx;
      }
      if (this.y - this.r < 0) {
        this.y = this.r;
        this.vy = -this.vy;
      } else if (this.y + this.r > this.canvasHeight) {
        this.y = this.canvasHeight - this.r;
        this.vy = -this.vy;
      }
    }
  }
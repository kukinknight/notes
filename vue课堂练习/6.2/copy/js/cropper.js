class Point{
  constructor(x, y){ this.x = x;  this.y = y; }

  offsetPoint = (dx, dy) => 
    new Point(this.x + dx,  this.y + dy);
  
  isInRect = (rect) => 
    this.x >= rect.x 
    && this.x <= rect.x + rect.width
    && this.y >= rect.y 
    && this.y <= rect.y + rect.height;
}

class Rect extends Point{
  constructor(x, y, width, height){
    super(Math.min(x, x + width), Math.min(y, y + height));
    this.width = Math.abs(width);
    this.height = Math.abs(height);
  }

  get x2() { return this.x + this.width; }
  get y2() { return this.y + this.height; }
  get pointA() { return new Point(this.x, this.y); }
  get pointC() { return new Point(this.x2, this.y2); }

  move(offset){ this.x += offset.dx; this.y += offset.dy; }

  offsetRect = (offset) => 
    new Rect(this.x + offset.dx, this.y + offset.dy, 
      this.width, this.height);

  isInRect = (largeRect) => 
    this.pointA.isInRect(largeRect) && this.pointC.isInRect(largeRect);
}

class Cropper {
  constructor(image, ratio=1) {
    this.image = image;
    this.ratio = ratio;
    this.displayHeight = Math.round(this.image.height * this.ratio);
    this.displayWidth = Math.round(this.image.width * this.ratio);
    this.minSize = 40;
    this.selection = null;
    this.range = new Rect(0, 0, this.displayWidth, this.displayHeight);
  }

  drawSelection(rect) {
    if(rect.isInRect(this.range))
      this.selection = rect;
  }

  get leftBox() {
    return new Rect(0, 0, this.selection.x2 - this.minSize, this.displayHeight);
  }
  get topBox() {
    return new Rect(0, 0, this.displayWidth, this.selection.y2 - this.minSize);
  }
  get rightBox() {
    return new Rect(this.selection.x + this.minSize, 0, 
      this.displayWidth - this.selection.x - this.minSize, this.displayHeight);
  }
  get bottomBox() {
    return new Rect(0, this.selection.y + this.minSize, 
      this.displayWidth, this.displayHeight);
  }

  move(offset) {
    if(this.selection.offsetRect(offset).isInRect(this.range))
      this.selection.move(offset);
  }

  resizeLeft(dx) {
    if(this.selection.pointA.offsetPoint(dx, 0).isInRect(this.leftBox)){
      this.selection.x += dx;
      this.selection.width -= dx;
    }
  }
  resizeRight(dx) {
    if(this.selection.pointC.offsetPoint(dx, 0).isInRect(this.rightBox))
      this.selection.width += dx;
  }
  resizeTop(dy) {
    if(this.selection.pointA.offsetPoint(0, dy).isInRect(this.topBox)){
      this.selection.y += dy;
      this.selection.height -= dy;
    }
  }
  resizeBottom(dy) {
    if(this.selection.pointC.offsetPoint(0, dy).isInRect(this.bottomBox))
      this.selection.height += dy;
  }

  crop() {
    const originImage = this.image;
    const cropX = this.selection.x / this.ratio;
    const cropY = this.selection.y / this.ratio;
    const width = this.selection.width / this.ratio;
    const height = this.selection.height / this.ratio;
    const newCanvas = document.createElement('canvas');
    newCanvas.width = width;
    newCanvas.height = height;
    const newContext = newCanvas.getContext('2d');
    newContext.drawImage(originImage, 
      cropX, cropY, width, height, 0, 0, width, height);
  
    // canvas转化为图片
    const newImage = new Image();
    newImage.src = newCanvas.toDataURL("image/png");
    return newImage;
  }
}

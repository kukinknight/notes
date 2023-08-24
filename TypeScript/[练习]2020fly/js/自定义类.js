

//通用物体类
class W{
	constructor(x,y) {
	    this.x = x;
		this.y = y;
		
		//自身动画相关的
		this.i = -1;//表示裁剪的图片位置
		this.imgW = 80;//裁剪的宽度
		this.sx = 0;//裁剪的起始x坐标
		this.t = 0; //存放上一次图片切换的时间
	}
	
	animate(nowTime){//自身的图片切换 自带判断 是否切换 
		if(nowTime-this.t >200  ){ //时间间隔大于 xx 毫秒 我们才切换图片
			//super 父类
			this.i++;
			if(this.i==4){
				this.i=0;
			}
			this.sx = this.i * this.imgW ;
			
			this.t  =nowTime ; //更新上一次图片切换的时间
		}
	
	}
	
}//结束 物体类



//声明一个敌人类 继承物体类
class Enemy extends W{
	constructor(x,y) {
		super(x,y); //调用父类的构造方法
		this.w = 50; //宽度
		this.h = 50; //高度
		this.vx = - Math.random() *5 ;// 0~-5  水平速度
		this.vy = Math.random() *6 -3 ; //-3~3之间A
	}
	
	update(nowTime){
		//TO DO 判断是否需要切换图片
		this.animate(nowTime);
		
		this.x += this.vx ;
		this.y += this.vy ;
	}
	
	draw(c2d,nowTime){ //画图方法  nowTime 当前的时刻 毫秒 不断增加
		this.update(nowTime);
		c2d.save();
		c2d.strokeStyle ="blue";
		
		let sArr= [this.sx,0,80,80];//裁剪的位置
		let dArr= [this.x,this.y,this.w,this.h];//绘制的位置
		
		// 创建渐变
		let color=c2d.createLinearGradient(0,0,c2d.canvas.width,0);
		c2d.font="14px Verdana";
		color.addColorStop("0","green");
		color.addColorStop("0.5","red");
		color.addColorStop("1.0","green");
		// 用渐变填色
		c2d.fillStyle=color;

		//context.fillText(文本,x,y,最大宽度);
		c2d.fillText("琛样心",this.x+this.w,this.y+this.h/2);
		
		
		c2d.fillStyle="blue"; //填充的颜色
		c2d.fillRect(this.x,this.y-3,this.w-2,5);//绘制血条
		
		c2d.drawImage(img2,...sArr,...dArr);//画图
		//c2d.drawImage(img2,0,0,80,80,this.x,this.y,this.w,this.h);
		
		//c2d.strokeRect(this.x,this.y,this.w,this.h);
		c2d.restore();
	}//draw
	
}//end Enemy 敌人类



//声明一个子弹类
class Hit{
	constructor(x,y) {
	    this.x = x;
		this.y = y;
		this.w = 8; //宽度
		this.h = 3; //高度
		this.vx = 5; //水平速度
	}
	update(){
		this.x += this.vx * 1;
	}
	draw(c2d){ //画图方法
		this.update();
		c2d.save(); //画布的状态存档
		
		c2d.fillStyle = "red";
		c2d.fillRect(this.x,this.y,this.w,this.h);
		c2d.restore(); //读取画布save之前的状态
	}
	
}//结束Hit类声明




//声明一个飞船类Ship
class Ship extends W{
	constructor(x,y) {
		super(x,y);//调用父类的构造函数 手写这个代码
		
		this.w = 100; //宽度
		this.h = 50; //高度
		this.vx = 3; //水平速度
		this.vy = 3; //垂直速度
		
		this.imgW = 100; //每张图片裁剪的宽度
	}
	
	update(nowTime){ //更新飞船的位置
		
		//图片切换
		//TO DO 判断是否需要切换图片
		this.animate(nowTime);
		
		//当飞船上下移动 
		//飞船向左 - vx
		//飞船向右 + vx
		//飞船向上 -vy
		//飞船向下 +vy
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
		this.update(nowTime);
		
		//400 x 40 
		let sArr= [this.sx,0,100,40];//裁剪的位置 第一张图
		let dArr= [this.x,this.y,this.w,this.h];//绘制的位置
		
		c2d.drawImage(img1,...sArr,...dArr);//画图
		//c2d.fillRect(this.x,this.y,this.w,this.h);
		//c2d.fillRect(this.x+this.w,this.y+22,10,5);
	}
	
}

class Tool{ /* 声明一个工具类 */
	
	//绘制网格 
	drawGrid(c2d,sizeX=10,sizeY=10,color="#000000"){
		c2d.save();//新建一个绘图状态
		//设置一些参数
		c2d.strokeStyle = color;//设置线条颜色
		c2d.lineWidth 	= 0.5; //绘制线条的宽度
		
		//绘制水平辅助线
		for(let x = sizeX+0.5; x<c2d.canvas.width ; x+=sizeX  ){
			c2d.beginPath();//开始一个独立的路径
			c2d.moveTo(x,0);
			c2d.lineTo(x,c2d.canvas.height);
			c2d.stroke();
		}
		
		//绘制垂直辅助线
		for(let y = sizeY+0.5; y<c2d.canvas.height ; y+=sizeY  ){
			c2d.beginPath();//开始一个独立的路径
			c2d.moveTo(0,y);
			c2d.lineTo(c2d.canvas.width,y);
			c2d.stroke();
		}
		
		c2d.restore();//返回"新建sava()"之前的画布状态
	}//end drawGrid
	
	//铺满全屏
	fullScreen(c2d){
		c2d.canvas.width = window.innerWidth;
		c2d.canvas.height = window.innerHeight;
		window.addEventListener('resize', (e) => {
			console.log(`宽度设置为${window.innerWidth}   高度设置为${window.innerHeight}`);
			
			c2d.canvas.width = window.innerWidth;
			c2d.canvas.height = window.innerHeight;

			this.drawGrid(c2d)
		});
	}

	
	//获取颜色数组
	getColorBox(){
		let arr =[
			"#EFECEB", "#F2F2F2","#E7EBED","#FADCDB","#FBEADA","#FCF9EA","#E5F6DA","#DBF5F5", "#D2D6F9","#FADDED","#DED9D7",
			"#95DA69","#70D5D7","#5B79E8","#ED77B6", "#5C4038","#7F7F7F","#262626","#A23735","#A66A30","#A7932C","#569230",
			"#358E90", "#314AA4","#A23C73"
		]
		return arr;
	}//end getColorBox





	pz(A,B){ //矩形A和矩形B 碰撞
		let isPz = false; //假设没有碰撞
		
		//B 在A的 
		let f1 = (A.x+A.w )<=B.x; //B在A的右边
		let f2 = (A.y+A.h )<=B.y; //B在A的下边
		let f3 = A.x>=(B.x +B.w); //B在A的左边
		let f4 = A.y>=(B.y +B.h); //B在A的上边
		// f1||f2||f3||f4 以上任何一种 结果为真
		if( !(f1||f2||f3||f4) ){//不在4种情况中的任一种
			isPz = true;//碰撞
		}
		return isPz;
	}
}//end Tool
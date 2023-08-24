//创造一个飞船对象
let ship  = new Ship(0,0);	
	
	
let canvas = document.querySelector("#canvas");
let c2d = canvas.getContext("2d");

//创建一个图像资源
let img2 = document.querySelector("#img2");
let img1 = document.querySelector("#img1");


//创造一个飞船对象
//let ship  = new Ship(0,0);

//存储子弹 数组 Array
let hitArr = [];
let hitTime  = 0; //子弹最后发射的时间

//敌人的数组 Array 每隔1000ms增加一个敌人
let enemyArr = [];
let enemyTime = 0;

let tool = new Tool();//创建一个工具人

//0.05秒 = 50ms  / 16.62 = 3
animate();//循环动画函数 
function animate(t){ //t表示当前时间 毫秒 一直在增加
	
	c2d.clearRect(0,0,canvas.width,canvas.height);
	
	//设置网格线
	tool.drawGrid(c2d,10,10);
	
	//自动创建敌人 canvas.width,canvas.height/2
	if(t - enemyTime >500){ //间隔1000ms 出生
		let enemy  = new Enemy(480,250);
		enemyArr.push(enemy);
		enemyTime = t;//更新最后一个敌人产生的时间
	}
	
	//创建一个子弹 创建一颗子弹 距离上一课子弹飞出经过了500ms
	if(keyObj.空格  && t-hitTime>200  ){ 
		let hit = new Hit(ship.x+ship.w ,ship.y+23);
		hitArr.push(hit); //将子弹加到数组
		hitTime = t; //存储最新的发射子弹时间
	}

    let hit1 = new Hit(ship.x+ship.w,ship.y,-1)
	let hit2 = new Hit(ship.x+ship.w,ship.y+50,1)
	let hit3 = new Hit(ship.x+ship.w,ship.y,-1)
	let hit4 = new Hit(ship.x+ship.w,ship.y+50,1)
	hitArr.push(hit1)
	hitArr.push(hit2)
	hitArr.push(hit3)
	hitArr.push(hit4)
	hitTime = t;
	//判断子弹和敌人是否碰撞
	for(let i=0; i<hitArr.length ; i++){
		let A = hitArr[i]; //获得一颗子弹
		for(let j=0;j<enemyArr.length;j++ ){
			let B = enemyArr[j];//一个敌人
			
			if( tool.pz(A,B) ){ //判断是否碰撞
				
				//碰撞反弹
				A.vx = -A.vx;
				B.vx = -B.vx;
				
				
				//hitArr.splice(i,1); //子弹删除
 				//enemyArr.splice(j,1); //敌人删除
			}
		}
		
	}



	//绘制敌人
	for(let enemy of enemyArr){
		enemy.draw(c2d,t);
	}

	for(let hit of hitArr){ //循环子弹
		hit.draw(c2d);
	}
	
	ship.draw(c2d,t);//画飞船 加入时间
	requestAnimationFrame(animate);//每隔16.67ms去调用
}

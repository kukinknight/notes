//用上下左右去控制飞船
//存储键盘按键的状态
let keyObj = {
	上:false,
	上:false,
	左:false,
	右:false,
	空格:false,
}

//当某个按键按下的时候触发
document.onkeydown=function(e){
	switch(e.keyCode){ //获取按键 唯一的 键值
		case 37:
			keyObj.左 = true;
			break;
		case 38:
			keyObj.上 = true;
			break;
		case 39:
			keyObj.右 = true;
			break;
		case 40:
			keyObj.下 = true;
			break;
		case 32:
			keyObj.空格 = true;
			break;
	}
}

//当你按键抬起
document.onkeyup=function(e){
	switch(e.keyCode){
		case 37:
			keyObj.左 = false;
			break;
		case 38:
			keyObj.上 = false;
			break;
		case 39:
			keyObj.右 = false;
			break;
		case 40:
			keyObj.下 = false;
			break;
		case 32:
			keyObj.空格 = false;
			break;
	}
}
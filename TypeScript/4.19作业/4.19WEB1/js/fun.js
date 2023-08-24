//获取所有的红包
let giftBoxArr = document.querySelectorAll('.giftBox')
//定时器(自定义函数,时间)
setInterval(function () {

	let n = parseInt(Math.random() * giftBoxArr.length)

	if (document.querySelector('.move')) {	//找到谁在运动
		document.querySelector('.move').classList.remove("move")
	}

	giftBoxArr[n].classList.add("move")

}, 1500)




window.addEventListener('resize', function() {
	// Handle resize event here
	fullScreen()
});








function fullScreen(){

	console.log(window.innerWidth+window.scrollWidth+'px')
	console.log(window.innerHeight+window.scrollHeight+'px')

	blackDiv.style.width = window.innerWidth+window.scrollHeight+'px';
	blackDiv.style.height = window.innerHeight+window.scrollHeight+'px';
	
}//fullScreen


function shuffle(arr) { //数组洗牌随机算法 
	let m = arr.length;
	let t, i;
	while (m) {
		i = Math.floor(Math.random() * m--)
		t = arr[m];
		arr[m] = arr[i];
		arr[i] = t;
	}
	return arr;
}//shuffle

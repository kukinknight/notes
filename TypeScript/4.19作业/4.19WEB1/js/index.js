let arr = [
	"陈世凡", "罗欣宇", "龙昌鑫", "王坤澎", "万磊", "唐意", "李钢武", "许安明", "王航", "陈洋鑫",
	"杨曦晨", "李文轩", "湛金梅", "赵梦娜", "伍湘瑾", "张金玉", "尹意凡", "李根", "邱龙权", "邹远航",
	"陈志杰", "李灵", "徐钰琳", "李晓姣", "刘云云", "韩鑫", "黄谦", "邹阳", "胡炉信", "万铭武",
	"杨伦", "陈宇飞", "陈迪", "易晨阳", "沈晶晶", "艾文萱", "卢云芳", "车红丽", "刘勇", "罗彦颖",
	"马超超", "常良聪"
]

console.log(arr.length)

let myText = document.querySelector("#myText")
let myImg = document.querySelector("#myImg")


btn.click()


//显示所有抽奖盒子在页面
let 文本 = ''
arr = shuffle(arr) //打乱数组


for (let i = 0; i < arr.length; i++) {
	let money = arr[i];
	let text = money
	let sun = money.split('.')
	console.log(sun)
	// if(money==60||money==80){	//如果是 60或者 80 显示金额 
	text = `<span style="color:black">${sun[0]}</span>`
	// }
	let div = `
	<div class="giftBox gift" data-money="${money}"  >
		<i >${text}</i>
	</div>`;

	文本 += div
}
A.innerHTML = 文本


//交互 让所有的div可以被点击
let divArr = document.querySelectorAll('#A div')
for (let div of divArr) {
	div.onclick = function () {
		this.onclick = null
		let 样式 = this.classList
		样式.remove("giftBox")


		let money = this.dataset.money;

		let src = '';
		console.log(typeof money)
		let num = parseInt(Math.random() * 4 + 1)
		switch (money) {
			case '杨曦晨':
				mp3_bg_1.play()
				mp3_bg.pause()
				break;
			case "100":
				mp3_100.play()
				break;
			case "80":
				mp3_80.play()
				break;
			case "60":
				mp3_60.play()
				break;
			case "40":
				mp3_40.play()
				break;
			default:
				mp3_20.play()
				break;
		}

		样式.add('open_pick')
		let sun = money.split('.')
		console.log(sun)
		//显示出来
		myImg.src = 'img/' + '21级新前端1班/' + money + '.jpg'
	

		moneyText.innerHTML = `${sun[0]}`
		this.innerHTML = `<i>${sun[0]}</i>`


		blackDiv.style.display = "block"
		show.style.visibility = 'visible'


	}//div
}//for


myText.onclick = function () {
	if (blackDiv.style.display == 'block') {
		show.style.visibility = 'hidden'
		blackDiv.style.display = 'none'
	}
}





btn.onclick = function () {
	this.style.display = 'none'
	mp3_bg.play()
	blackDiv.style.display = 'none'
}//btn




fullScreen()


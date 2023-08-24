const canvas = document.querySelector('canvas');
const c2d = canvas.getContext('2d');


const img = new Image();

const myImg = document.querySelector('#myImg')
myImg.onload = () => {

    
    头像裁剪(c2d, myImg, 300, 300, 66)

}//

function 头像裁剪(c2d, img, x, y, r) {  //QQ群复制

    c2d.save();
    let size = 2 * r;  //边长 = 两倍的半径
    c2d.arc(x, y, r, 0, 2 * Math.PI);
    c2d.clip();
    c2d.drawImage(img, x - r, y - r, size, size);
    c2d.restore();
}

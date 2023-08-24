var u = document.getElementsByTagName("ul")[0]
var roll = 0
var icons = document.getElementsByClassName("show")[0].children
var mouse={
    x:0,
    y:0
}
window.addEventListener("mousemove",function(evt){
    mouse.x = evt.x
    mouse.y = evt.y
})
window.addEventListener("wheel",function(evt){
    if(document.elementFromPoint(mouse.x,mouse.y).tagName=="LI"){
        if(evt.deltaY>0 && roll> -640){
            roll -= 80
        }
        else if(evt.deltaY<0 && roll <0){
            roll += 80
        }
        index  = Math.abs(roll) / 80
        for(var i = 0;i<icons.length;i++){
            icons[i].setAttribute("style","color:gray;text-shadow:none;filter:none;opacity:0")
        }
        icons[index].setAttribute("style","color:white;text-shadow:0 0 5px #1e90ff,0 0 10px #1e90ff;filter:hue-rotate("+index/9*360+"deg);opacity:1;")
    }
    u.style.top=roll+"px"
})
icons[0].setAttribute("style","color:white;text-shadow:0 0 5px #1e90ff,0 0 10px #1e90ff;opacity:1;")
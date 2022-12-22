let index = 1;
const min = 1;
const max = 60;
let num = 18;
//圖片
let pic = document.querySelector('.pic');
let imgURL;
let img;

//按鈕
let minus = document.querySelector('.minus');
let plus = document.querySelector('.plus');
let color = document.querySelector('.color');


window.onload = function() {
    GenCar();
    
    plus.addEventListener('click', function(){
        if(index < max){
            index++;
        }else{
            index = min;
        }
        setImg();
    })
    minus.addEventListener('click', function(){
        if(index > min){
            index--;
        }else{
            index = max;
        }
        setImg();
    })
    color.addEventListener('click', function(){
        if(num < 24){
            num++;
        }else{
            num = 18;
        }
        imgURL = `/Edenbon.github.io/Altis360/TOYOTA/${num}/360EXT_1_${num}_${index}.png`;
        img.setAttribute("src", imgURL);
        pic.append(img);
    })
}
function GenCar() {
    //建立DOM
    img = document.createElement('img');
    for(let i = max; i >= min; i--){
        imgURL = `/Edenbon.github.io/Altis360/TOYOTA/18/360EXT_1_18_${i}.png`;
        //設定src屬性
        img.setAttribute("src", imgURL);
        //把DOM加到pic中
        pic.append(img);
    }
}
function setImg(){
    imgURL = `/Edenbon.github.io/Altis360/TOYOTA/18/360EXT_1_18_${index}.png`;
    img.setAttribute("src", imgURL);
    pic.append(img);
}








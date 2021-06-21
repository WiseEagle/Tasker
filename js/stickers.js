//Получаем все элементы с заданными цветами
let stickerColors = document.getElementsByClassName("sticker-color");

//Массив цветов для элементов палитры
let colors = ["red","green","blue","orange","yellow","pink"];

//задаем цвета элементам палитры
for(let i = 0 ; i < stickerColors.length; i++){
    stickerColors[i].style.backgroundColor =  colors[i];
}
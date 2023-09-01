let imagenes = ["img/Amor.png", "img/Amor2.png", "img/Amor3.png", "img/Amor4.png", "img/Amor5.png"];
let noImg = 0;

function cambiarImg(){
    noImg = noImg + 1;
    if(noImg == 5)
    noImg = 0;

    let imagen =  document.getElementById("imgAmor");
    imagen.src = imagenes[noImg];

}
// permitir que lite parpadee 

let f = 0;
setInterval(() => {
    f = numero_aleatorio(2)
    if (f === 1) {
        pestañear()
    }else{
    }
 }, 4000);
 let f2 = 0;
setInterval(() => {
    f2 = numero_aleatorio(7)
    if (f2 === 2) {
        animaciones("moverOjosAI")
    }else{
    }
 }, 4000);
 let f3 = 0;
 setInterval(() => {
     f3 = numero_aleatorio(8)
     if (f3 === 2) {
         animaciones("moverOjosAD")
     }else{
     }
  }, 4000);
 

function themeAutoSelect() {
let cabeza = document.getElementById("cabeza");  
let orejaA = document.getElementById("orejaA");
let orejaB = document.getElementById("orejaB");
switch (colorsTheme) {
    case "default":
        cabeza.classList.remove("multiColorShadow");
        orejaA.classList.remove("multiColorShadow");
        orejaB.classList.remove("multiColorShadow");
        break;
        case "multiColor":
            cabeza.classList.add("multiColorShadow");
            orejaA.classList.add("multiColorShadow");
            orejaB.classList.add("multiColorShadow");
            break;


    default:
        break;
}
}
themeAutoSelect()

despertar();

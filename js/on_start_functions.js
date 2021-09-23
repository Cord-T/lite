// permitir que lite parpadee 

let f = 0;
setInterval(() => {
    f = numero_aleatorio(2)
    if (f === 1) {
        pestañear()
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

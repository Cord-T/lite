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

if (reconocimientoContinuo == 1) {
    const liteStartButon = document.getElementById("cabeza");
    liteStartButon.addEventListener("click", () => {
        apagado("iniciar");
        setTimeout(() => {
            hablar("sistemas iniciados, iniciando reconocimiento de voz automatico");
            setTimeout(() => {
                recognitionStart.start()
            }, 2000);
        }, 8000);
    });
    apagado("apagar");
}

if (iniciadoPorPrimeraV == 0) {
    const liteStartButon = document.getElementById("cabeza");
    liteStartButon.addEventListener("click", () => {
        apagado("iniciar");
        setTimeout(() => {
            localStorage.setItem("iniciadoPorPrimeraV", 1)
            hablar("sistemas iniciados, voz calibrada, Lite iniciada, faltan datos de usuario, estableciendo sistema a estado NUEVO, Hola usuario, soy Lite, su asistente personal, si desea mas informacion de mis capacidades puede explorar el manual, en el menu de configuración, ¿y bien?, que esperamos para empezar");
        }, 8000);
    });
    apagado("apagar");
}

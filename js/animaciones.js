// ---animaciones independientes que pueden ser llamadas individualmente pero que si estan acopladas en el gestor --- Estas funcionan completamente independiente y duran solo 5 segundos

// guiña el ojo isquierdo
function wink() {
    let ojo1 = document.getElementById("ojo1");
    ojo1.classList.add("parpadear");
    setTimeout(        function () {
        ojo1.classList.remove("parpadear")  
    },500)   
}
// a diferencia de guiño o wink, este se encarga de cerrar ambos ojos (usado para darle naturalidad a lite y que cierre los ojos cada cierto tiempo)
function pestañear() {
    let ojo1 = document.getElementById("ojo1");
    let ojo2 = document.getElementById("ojo2");
    ojo1.classList.add("parpadear");
    setTimeout(        function () {
        ojo1.classList.remove("parpadear")  
    },500)
    ojo2.classList.add("parpadear");
    setTimeout(        function () {
        ojo2.classList.remove("parpadear")  
    },500)
}
// fuerza el parpado de los ojos hacia arriba (se usa para expresar felicidad o tristesa)
function forzarOjos() {
    let ojo1 = document.getElementById("ojo1");
    let ojo2 = document.getElementById("ojo2");
    ojo1.classList.add("forzarOjos");
    setTimeout(        function () {
        ojo1.classList.remove("forzarOjos")  
    },5000)
    ojo2.classList.add("forzarOjos");
    setTimeout(        function () {
        ojo2.classList.remove("forzarOjos")  
    },5000)
}
// deja caer el parpado superior para expresar aburrimiento o desagrado
function aburrirOjos() {
    let ojo1 = document.getElementById("ojo1");
    let ojo2 = document.getElementById("ojo2");
    ojo1.classList.add("aburrirOjos");
    setTimeout(        function () {
        ojo1.classList.remove("aburrirOjos")  
    },5000)
    ojo2.classList.add("aburrirOjos");
    setTimeout(        function () {
        ojo2.classList.remove("aburrirOjos")  
    },5000)
}
// hace que la sonrisa de lite se haca mas pequeña (sirve para demostrar tristesa o una forma de mostrar que ella no calculo esto)
function entristecerVoca() {
    let voca = document.getElementById("voca");
    voca.classList.add("entristecerVoca");
    setTimeout(        function () {
        voca.classList.remove("entristecerVoca")  
    },5000)
}
// sube el tamaño de la sonrisa de lite lo suficiente para que el usuario lo note y que no parezca una loca o asesina en potencia
function sonreir(){
    let voca = document.getElementById("voca");
    voca.classList.add("sonreir");
    setTimeout(        function () {
        voca.classList.remove("sonreir")  
    },5000)
}
// mueve ligeramente las orejas de isquierda a derecha con diferentes degradados para cada una, la variable orejas escribes que oreja quieres agitar 
function agitarOrejas(oreja) {
    let orejaI = document.getElementById("orejaA");
    let orejaD = document.getElementById("orejaB");

    if (oreja == "isquierda") {
        orejaI.classList.add("agitarOrejaA");
        setTimeout(() => {
            orejaI.classList.remove("agitarOrejaA")
        }, 5000);
    }else if (oreja == "derecha") {
        orejaD.classList.add("agitarOrejaB");
        setTimeout(() => {
            orejaD.classList.remove("agitarOrejaB")
        }, 5000);
    }
}
function bajarOrejas(oreja) {
    let orejaI = document.getElementById("orejaA");
    let orejaD = document.getElementById("orejaB");

    if (oreja == "isquierda") {
        orejaI.classList.add("bajarOrejaI");
        setTimeout(() => {
            orejaI.classList.remove("bajarOrejaI")
        }, 5000);
    }else if (oreja == "derecha") {
        orejaD.classList.add("bajarOrejaD");
        setTimeout(() => {
            orejaD.classList.remove("bajarOrejaD")
        }, 5000);
    }  
}
function moverOjos(lado) {
    let ojos = document.getElementById("ojos");

    if (lado == "derecha") {
        ojos.classList.add("moverOjosAD");
        setTimeout(() => {
            ojos.classList.remove("moverOjosAD")
        }, 5000);
    }else if (lado == "isquierda") {
        ojos.classList.add("moverOjosAI");
        setTimeout(() => {
            ojos.classList.remove("moverOjosAI")
        }, 5000);
    }  
}

// --- animaciones dependientes de otros parametros o sencillamente no acopladas al gestor para mayor comodidad ---

// ejecuta la animacion de despertar de lite (solo una vez al dia) 
function animacionDespertar() {
    let voca = document.getElementById("voca");
    let ojo1 = document.getElementById("ojo1");
    let ojo2 = document.getElementById("ojo2");
    let orejaA = document.getElementById("orejaA");
    let orejaB = document.getElementById("orejaB");

    voca.classList.add("despertarVoca");
    ojo1.classList.add("despertarOjos");
    ojo2.classList.add("despertarOjos");
    orejaA.classList.add("despertarOreja1");
    orejaB.classList.add("despertarOreja2");
    setTimeout(function () {
        voca.classList.remove("despertarVoca");
        ojo1.classList.remove("despertarOjos");
        ojo2.classList.remove("despertarOjos");
        orejaA.classList.remove("despertarOreja1");
        orejaB.classList.remove("despertarOreja2"); 
    },11000)
}

// funcion encargada de verificar si ya se ejecuto la animacionDespertar hoy 
function despertar() {
    let ultimaDespertada = localStorage.getItem("ultimaDespertada");
    console.log(ultimaDespertada)
    if (ultimaDespertada !== hoy) {
        localStorage.setItem("ultimaDespertada", hoy);
        animacionDespertar();
    }else{}
}







// motor de animaciones o Gestor de animaciones, con este se llaman a la mayoria de animaciones independientes de arriba, es mas facil que elegir una por una
function animaciones(animacion){

    switch (animacion) {
            case "wink" :
            wink()
            break;
            case "pestañear" :
            pestañear()
            break;
            case "forzar ojos" :
            forzarOjos();
            break;
            case "aburrir ojos":
            aburrirOjos()
            break;
            case "entristecer voca" :
            entristecerVoca();
            break;
            case "sonreir" :
            sonreir();
            break;
            case "agitarOrejaI" :
            agitarOrejas("isquierda");
            break;
            case "agitarOrejaD" :
            agitarOrejas("derecha");
            break;
            case "bajarOrejaI" :
            bajarOrejas("isquierda");
            break;
            case "bajarOrejaD" :
            bajarOrejas("derecha");
            break;
            case "alegrarse" :
            animaciones("agitarOrejaI");
            animaciones("agitarOrejaD");
            animaciones("forzar ojos");
            animaciones("sonreir");
            break;
            case "aburrirse" :
            animaciones("aburrir ojos");
            animaciones("entristecer voca");
            break;
            case "deprimirse" :
            animaciones("bajarOrejaI");
            animaciones("bajarOrejaD");
            animaciones("forzar ojos");
            animaciones("entristecer voca");
            break;
            case "moverOjosAI" :
                moverOjos("isquierda");
            break;
            case "moverOjosAD" :
                moverOjos("derecha");
            break;

    
        default:
            break;
    }


    

}
// habre y cierra la voca cuantas veces se le indique usualmente Cantidad de palabras / 4.7 es lo mas acertado
function animacionHablar(veces_a_repetir) {
    let voca = document.getElementById("voca");
    let v = 0;
    let hablar = setInterval(() => {
     
        if (v < veces_a_repetir) {
          
        }else{    
        clearInterval(hablar);
        }

        voca.classList.add("hablar");
        setTimeout(        function () {
            voca.classList.remove("hablar")  
        },300)
    //   f = 0
         v++
     }, 320);
}


function apagado(iniciarOApagar) {
    // iniciar efectos visuales de lite
     
     let ojos = document.getElementById("ojos");
     let voca = document.getElementById("voca");
     let orejaA = document.getElementById("orejaA");
     let orejaB = document.getElementById("orejaB");
     let offSVG = document.getElementById("offSVG");
     
    
        if (iniciarOApagar == "apagar") {
            ojos.classList.add("oculto")
            voca.classList.add("oculto")
            orejaA.classList.add("ocultarOrejas")
            orejaB.classList.add("ocultarOrejas")
            setTimeout(function () {
              offSVG.classList.remove("oculto");
            },400)
    
        }
        else if (iniciarOApagar == "iniciar") {
            offSVG.classList.add("oculto");
            setTimeout(function () {
                ojos.classList.remove("oculto")
                voca.classList.remove("oculto")
                orejaB.classList.remove("ocultarOrejas")
                orejaA.classList.remove("ocultarOrejas")
                animacionDespertar();
            },400) 
        }
}

console.log("motor de animaciones cargadas")
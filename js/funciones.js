function start_lite() {
// iniciar efectos visuales de lite
 let nucleo = document.getElementById("nucleo");
 let cara = document.getElementById("cara");
 let square = document.getElementById("square");
  let cubos = document.getElementById("cube_container");
  let eye = document.getElementById("eye")
    if (cubos.classList.contains("cubes_on")) {
        cubos.classList.remove("cubes_on")
        square.classList.remove("full_square")
        eye.classList.remove("full_eye")
        setTimeout(function () {
            nucleo.classList.add("oculto") 
            setTimeout(function () {
                cara.classList.remove("oculto"); 
                         
            },400)
        },400)

    }
    else{
        cara.classList.add("oculto");
        setTimeout(function () {
            nucleo.classList.remove("oculto") 
            setTimeout(function () {
                cubos.classList.add("cubes_on");
                square.classList.add("full_square")
                eye.classList.add("full_eye")
            },400) 
        },400)
    }
 }

function guiñar() {
    let ojo1 = document.getElementById("ojo1");
   
    ojo1.classList.add("parpadear");
    setTimeout(        function () {
        ojo1.classList.remove("parpadear")  
    },500)

    
}

function animacion_hablar(veces_a_repetir) {
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

 function cmdSimplifyToName(cmd) {
    //  simplificar al maximo el comando para que lith escriba correctamente el nombre
    cmd = cmd.replace("?", "");
    cmd = cmd.replace("¿", "");
    cmd = cmd.replace(".", "");
    cmd = cmd.replace(",", "");
    cmd = cmd.replace(",", "");
    cmd = cmd.replace(",", "");
    cmd = cmd.replace(",", "");
    cmd = cmd.replace(",", "");
    cmd = cmd.replace(",", "");
    cmd = cmd.replace(" ", "");
    cmd = cmd.replace(" ", "");
    cmd = cmd.replace(" ", "");
    cmd = cmd.replace(" ", "");
    cmd = cmd.replace(" ", "");
    cmd = cmd.replace(" ", "");
    cmd = cmd.replace(" ", "");
    cmd = cmd.replace(" ", "");
    cmd = cmd.replace("como", "");
    cmd = cmd.replace("light", "");
    cmd = cmd.replace("lite", "");
    cmd = cmd.replace("lait", "");
    cmd = cmd.replace("life", "");
    cmd = cmd.replace("cómo", "");
    cmd = cmd.replace("estas", "");
    cmd = cmd.replace("bueno", "");
    cmd = cmd.replace("adios", "");
    cmd = cmd.replace("andas", "");
    cmd = cmd.replace("perdon", "");
    cmd = cmd.replace("nombre", "");
    cmd = cmd.replace("energia", "");
    cmd = cmd.replace("ilogica", "");
    cmd = cmd.replace("ilogico", "");
    cmd = cmd.replace("perfecto", "");
    cmd = cmd.replace("encuentras", "");
    cmd = cmd.replace("legendario", "");
    cmd = cmd.replace("identifico", "");
    cmd = cmd.replace("sabias", "");
    cmd = cmd.replace("sabes", "");
    cmd = cmd.replace("mucho", "");
    cmd = cmd.replace("gusto", "");
    cmd = cmd.replace("sepalo", "");
    cmd = cmd.replace("nombro", "");
    cmd = cmd.replace("dicen", "");
    cmd = cmd.replace("esto", "");
    cmd = cmd.replace("onda", "");
    cmd = cmd.replace("liz", "");
    cmd = cmd.replace("ight", "");
    cmd = cmd.replace("llamo", "");
    cmd = cmd.replace("hola", "");
    cmd = cmd.replace("lets", "");
    cmd = cmd.replace("tal", "");
    cmd = cmd.replace("lait", "");
    cmd = cmd.replace("que", "");
    cmd = cmd.replace("que", "");
    cmd = cmd.replace("era", "");
    cmd = cmd.replace("mal", "");
    cmd = cmd.replace("mi", "");
    cmd = cmd.replace("me", "");
    cmd = cmd.replace("tu", "");
    cmd = cmd.replace("es", "");
    cmd = cmd.replace("is", "");
    cmd = cmd.replace("te", "");
    cmd = cmd.replace("el", "");
    cmd = cmd.replace("es", "");
    cmd = cmd.replace("eh", "");
    
    return cmd
}
function numero_aleatorio(cantidad) {
    let n;
    n = Math.floor(Math.random() * cantidad);
    return n;
}

function tomar_decision() {
    let decition = numero_aleatorio(4);
    if (decition < 3) {
        decition = "si"
    }else if (decition > 3) {
        decition = "no"
    }

    return decition;
}

function lanzar_dado() {
    let dado = numero_aleatorio(7);
    switch (dado) {
        case 0:
            dado = 1;
            break;
            case 1:
                dado = 2;
                break;
                case 2:
                    dado = 3;
                    break;
                    case 3:
                        dado = 4;
                        break;
                        case 4:
                            dado = 5;
                            break;
                            case 5:
                                dado = 6;
                                break;
    
        default:
            break;
    }
    return dado;
}
function jugar_ludo() {
  let permitir_sacar_otras_fichas = false;
    
    decition = numero_aleatorio(3);
    my_turn = true;
    in_game = true;
    let pasos_obj = 53;


    if (fi1 > 52) {
        fi1 = "hake mate"
    }
    if (fi2 > 52) {
        fi2 = "hake mate"
    }
    if (fi3 > 52) {
        fi3 = "hake mate"
    }
    if (fi4 > 52) {
        fi4 = "hake mate"
    }

    if (fi1 !== "base" && fi1 !== "dead" && fi1 !== "hake mate" && fi1 !== "home") {
        ficha_1 = "activa"
    }
    if (fi2 !== "base" && fi2 !== "dead" && fi2 !== "hake mate" && fi2 !== "home") {
        ficha_2 = "activa"
    }
    if (fi3 !== "base" && fi3 !== "dead" && fi3 !== "hake mate" && fi3 !== "home") {
        ficha_3 = "activa"
    }
    if (fi4 !== "base" && fi4 !== "dead" && fi4 !== "hake mate" && fi4 !== "home") {
        ficha_4 = "activa"
    }
    if (fi1 == "dead" && fi2 == "dead" && fi3 == "dead" && fi4 == "dead") {
        hablar("rayos, e... e perdido, bueno, era obvio, una simple maquina como yo le costara un mundo ganarle a un ser tan poderoso como el ser humano, fabulosa partida ")
        my_turn == false;
        in_game == false;
    }

    if (my_turn == true) {
        let dado = lanzar_dado();
        hablar("lanze el dado y salio"+dado);
        // obligarla a sacar un peon al ver que todos estan en base 
        if (fi1 == "base" && fi2 == "base" && fi3 == "base" && fi4 == "base") {
            if (dado > 4) {
                fi1 = 1;
                hablar("como salio un numero de saque, sacare mi ficha si me permite, y ahora volvere a lanzar el dado");
                dado = lanzar_dado();
                hablar("perfecto, salio"+dado)
                permitir_sacar_otras_fichas = true;
            }
        }

        if (dado == 6) {
            var sacar_ficha = tomar_decision();

                
            if (fi1 == "hake mate" && dado == 6) {
                fi1 = "home";
                hablar("mi ficha numero 1 ya esta en casa, nice")    
            }
            else if (fi2 == "hake mate" && dado == 6) {
                fi2 = "home";
                hablar("mi ficha numero 2 ya esta en casa, nice")    
            }
            else if (fi3 == "hake mate" && dado == 6) {
                fi3 = "home";
                hablar("mi ficha numero 3 ya esta en casa, nice")    
            }
            else if (fi4 == "hake mate" && dado == 6) {
                fi4 = "home";
                hablar("mi ficha numero 4 ya esta en casa, nice")    
            }



            if (sacar_ficha == "si" && permitir_sacar_otras_fichas == true) {
                if (fi1 == "base") {
                  fi1 = 1;
                  hablar("como salio un numero de saque, sacare mi ficha, 1, si me permite"); 
                }
                else if (fi2 == "base") {
                    fi2 = 1;
                    hablar("como salio un numero de saque, sacare mi ficha, 2, si me permite");
                }
                else if (fi3 == "base"){
                    fi3 = 1;
                    hablar("como salio un numero de saque, sacare mi ficha, 3, si me permite");
                }
                else if (fi4 == "base") {
                    fi4 = 1;
                    hablar("como salio un numero de saque,sacare mi ficha, 4, si me permite");
                }
            }
        }


        if (ficha_1 =="activa" || ficha_2 =="activa" || ficha_3 =="activa" || ficha_4 =="activa") {
            
            if (ficha_1 =="activa" && decition == 0) {
                fi1 = fi1+ dado;
                hablar("ok movere mi ficha uno "+dado+" casillas")
            }else if (ficha_1 =="inactiva" && decition == 0) {
                decition = decition +1;
            }

            if (ficha_2 =="activa" && decition == 1) {
                fi2 = fi2+ dado;
                hablar("ok movere mi ficha dos "+dado+" casillas")
            }else if (ficha_2 =="inactiva" && decition == 1) {
                decition = decition +1;
            }
            if (ficha_3 =="activa" && decition == 2) {
                fi3 = fi3+ dado;
                hablar("ok movere mi ficha tres "+dado+" casillas")
            }else if (ficha_3 =="inactiva" && decition == 2) {
                decition = decition +1;
            }
            if (ficha_4 =="activa" && decition == 3) {
                fi4 = fi4+ dado;
                hablar("ok movere mi ficha cuatro "+dado+" casillas")
            }else if (ficha_4 =="inactiva" && decition == 3) {
                decition = decition -3;
            }


        }
    
    }
     
    if (fi1 == "home" && fi2 == "home" && fi3 == "home" && fi4 == "home") {
        hablar("¡Genial gane!, ha sido un verdadero placer jugar ludo con usted reestablecere los datos por si quiere jugar otra partida")
    my_turn = false;
    permitir_sacar_otras_fichas = false;
    ficha_1 ="inactiva"
    ficha_2 ="inactiva"
    ficha_3 ="inactiva"
    ficha_4 ="inactiva"
    fi1 = "base";
    fi2 = "base";
    fi3 = "base";
    fi4 = "base";
    in_game = false;
    }
    
    
}
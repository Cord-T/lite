// crear sistema de reconocimiento de voz 
// reconocimiento de voz continuo que solo reconoce el oye lite 
let seEjecutoComando = false;

// reconocimiento de voz con finalidad de llamada
let CallRecognition  = new webkitSpeechRecognition();
CallRecognition.lang = 'es-ES';
CallRecognition.continuous = false;
CallRecognition.interResults = true;

CallRecognition.onresult = (event) => {
    // establecerle a una variable el valor de lo que dice el usuario
    const results = event.results;
    frase = results[results.length - 1][0].transcript;
    var cmd = frase;
    respuesta = "";
    // simplificar comando
    cmd = cmd.toLowerCase();
    cmd = cmd.replace("á", "a");
    cmd = cmd.replace("jehová", "jehova");
    cmd = cmd.replace("é", "e");
    cmd = cmd.replace("í", "i");
    cmd = cmd.replace("ó", "o");
    cmd = cmd.replace("ò", "o");
    cmd = cmd.replace("ú", "u");
    cmd = cmd.replace("à", "a");
    cmd = cmd.replace("è", "e");
    cmd = cmd.replace("ì", "i");
    cmd = cmd.replace("ò", "o");
    cmd = cmd.replace("ù", "u");
    // ----
    console.log(cmd);
    if (cmd.includes('oye like')|| cmd.includes('oye lit')|| cmd.includes('oye like')|| cmd.includes('hey')|| cmd.includes('like') > -1 || cmd.includes('oye')|| cmd.includes("ok") || cmd.includes("atiende")) {
        hablar(atender[numero_aleatorio(5)]);
       animaciones("sonreir")
       CallRecognition.stop();
       setTimeout(() => {
           recognition.start()
           seEjecutoComando = true;
       }, 2000);
    }
    else{
        
    }
}
CallRecognition.onend = function () {
    setTimeout(() => {
        if (seEjecutoComando == false) {
            setTimeout(() => {
                CallRecognition.start();
            }, 500);
        } 
    }, 1500);
  
}

// Reconocimiento de voz con finalidad de comando 
let recognition = new webkitSpeechRecognition();
recognition.lang = 'es-ES';
recognition.continuous = false;
recognition.interResults = false;

// establecer un evento al iniciar 
recognition.addEventListener("start", () => {
    EyeError(1);
    peticionCumplida = "no";
start_lite("iniciar")
});
// establecer que al precionar espacio se inicie el reconocimiento
window.onkeydown = tecla;
function tecla(event){
keyNum = event.keyCode;
if(keyNum==32) recognition.start();
}
// reconocimiento de llamada 
// reconocimiento de comando 
recognition.onresult = (event) => {
    // establecerle a una variable el valor de lo que dice el usuario
    const results = event.results;
    frase = results[results.length - 1][0].transcript;
    var cmd = frase;
    respuesta = "";
    // simplificar comando
    cmd = cmd.toLowerCase();
    cmd = cmd.replace("á", "a");
    cmd = cmd.replace("jehová", "jehova");
    cmd = cmd.replace("é", "e");
    cmd = cmd.replace("í", "i");
    cmd = cmd.replace("ó", "o");
    cmd = cmd.replace("ò", "o");
    cmd = cmd.replace("ú", "u");
    cmd = cmd.replace("à", "a");
    cmd = cmd.replace("è", "e");
    cmd = cmd.replace("ì", "i");
    cmd = cmd.replace("ò", "o");
    cmd = cmd.replace("ù", "u");
    // ----
    comandos(cmd);
    hablar(respuesta);
    console.log(cmd);
}
// establecer un evento al terminar el reconocimiento 
recognition.onend = function () {
    EyeError(0);
    
    // se pregunta si la opcion reconocimientoContinuo esta activa, si lo esta entonces al finalizar el reconocimiento de comandos inicia este automaticamente 
    if (reconocimientoContinuo == 1) {
        setTimeout(() => {
            CallRecognition.start()
        }, 2000);  
    }
start_lite("apagar")
}


console.log("Reconocimientos de voz cargados");


// crear sistema de reconocimiento de voz 

let recognition = new webkitSpeechRecognition();
recognition.lang = 'es-ES';
recognition.continuous = false;
recognition.interResults = false;

// establecer un evento al iniciar 
recognition.addEventListener("start", () => {
start_lite()
});

// establecer que al precionar espacio se inicie el reconocimiento
window.onkeydown = tecla;

function tecla(event){

keyNum = event.keyCode;

if(keyNum==32) recognition.start();


}

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
start_lite()
}
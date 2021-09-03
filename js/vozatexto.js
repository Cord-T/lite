const startrecord = document.getElementById("startrecord");
const stoprecord = document.getElementById("stoprecord");
const texto = document.getElementById("text");

let recognition = new webkitSpeechRecognition();
recognition.lang = 'es-ES';
recognition.continuous = true;
recognition.interResults = true;

startrecord.addEventListener("click", () => {
    recognition.start();

});

stoprecord.addEventListener("click", () => {
    recognition.stop();
});

recognition.onresult = (event) => {
    const results = event.results;
    const frase = results[results.length - 1][0].transcript;
    console.log(frase);
    texto.value += frase;
}
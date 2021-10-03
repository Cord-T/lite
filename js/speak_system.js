function hablar(respuesta) {
  respuesta = new SpeechSynthesisUtterance(respuesta);
  let voices = speechSynthesis.getVoices();
  respuesta.voice = voices[voces];
  speechSynthesis.speak(respuesta);
  animacionHablar(respuesta.length/4.5)
  console.log(respuesta.text); 
    
}
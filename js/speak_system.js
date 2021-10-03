function hablar(respuesta) {  
  let Anim = respuesta.length/4.5;
  respuesta = new SpeechSynthesisUtterance(respuesta);
  let voices = speechSynthesis.getVoices();
  respuesta.voice = voices[voces];
  speechSynthesis.speak(respuesta);
  animacionHablar(Anim);
  console.log(respuesta.text); 
    
}

console.log("sistema de voz cargado");
  // Función que pone las voces dentro del select
//   const cargarVoces = () => {
//     if (vocesDisponibles.length > 0) {
//       console.log("No se cargan las voces porque ya existen: ", vocesDisponibles);
//       return;
//     }
//     vocesDisponibles = speechSynthesis.getVoices();
//     console.log({ vocesDisponibles })
//     posibleIndice = vocesDisponibles.findIndex(voz => IDIOMAS_PREFERIDOS.includes(voz.lang));
//     if (posibleIndice === -1) posibleIndice = 0;
//     vocesDisponibles.forEach((voz, indice) => {
//       const opcion = document.createElement("option");
//       opcion.value = indice;
//       opcion.innerHTML = voz.name;
//       opcion.selected = indice === posibleIndice;
//       $voces.appendChild(opcion);
//     });
//   };


function hablar(respuesta) {
    respuesta.voice;
    speechSynthesis.speak( new SpeechSynthesisUtterance(respuesta));
    // let r_l = respuesta.length;
    // r_l = r_l / 4.5
    animacionHablar(respuesta.length/4.5)
    console.log(respuesta.text); 
    
}
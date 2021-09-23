username = localStorage.getItem("name");
var cantidadDeParticulas = localStorage.getItem("cantidadDeParticulas");
if (cantidadDeParticulas == null) {
    localStorage.setItem("cantidadDeParticulas", 10)
    cantidadDeParticulas = localStorage.getItem("cantidadDeParticulas");
}

var colorsTheme = localStorage.getItem("colorsTheme"); 
if (cantidadDeParticulas == null) {
    localStorage.setItem("cantidadDeParticulas", "default")
    cantidadDeParticulas = localStorage.getItem("cantidadDeParticulas");
}

var reconocimientoContinuo = localStorage.getItem("reconocimientoContinuo");

let iniciadoPorPrimeraV = localStorage.getItem("iniciadoPorPrimeraV");
if (iniciadoPorPrimeraV == null) {
    localStorage.setItem("iniciadoPorPrimeraV", 1);
    iniciadoPorPrimeraV = localStorage.getItem("iniciadoPorPrimeraV");
}





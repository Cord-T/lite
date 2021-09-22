username = localStorage.getItem("name");
var cantidadDeParticulas = localStorage.getItem("cantidadDeParticulas");
if (cantidadDeParticulas == null) {
    localStorage.setItem("cantidadDeParticulas", 10)
    cantidadDeParticulas = localStorage.getItem("cantidadDeParticulas");
}
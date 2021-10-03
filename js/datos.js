// En esta seccion se guardan los datos extraidos del usuario y si no hay datos se usa un if para establecer una forma predeterminada y 
// evitar errores 

// nombre de usuario se extrae del local storage del item llamado NAME este se establece con el comando, "me llamo"
username = localStorage.getItem("name");
// estos datos son para saber cuantas particulas se desean para no relentizar el sistema 
var cantidadDeParticulas = localStorage.getItem("cantidadDeParticulas");
if (cantidadDeParticulas == null) {
    localStorage.setItem("cantidadDeParticulas", 10)
    cantidadDeParticulas = localStorage.getItem("cantidadDeParticulas");
}
// datos del color 
var colorsTheme = localStorage.getItem("colorsTheme"); 
if (cantidadDeParticulas == null) {
    localStorage.setItem("cantidadDeParticulas", "default")
    cantidadDeParticulas = localStorage.getItem("cantidadDeParticulas");
}
// con esta variable se elige si lite sigue funcionando despues de terminar un comando si esta activo al decir atiende va a atender 
var reconocimientoContinuo = localStorage.getItem("reconocimientoContinuo");
// la variable iniciado por primera vez sirve para agregar acciones al ser iniciado por primera vez 
let iniciadoPorPrimeraV = localStorage.getItem("iniciadoPorPrimeraV");
if (iniciadoPorPrimeraV == null) {
    localStorage.setItem("iniciadoPorPrimeraV", 0);
    iniciadoPorPrimeraV = localStorage.getItem("iniciadoPorPrimeraV");
    location.reload();
}
// esta variable es para el sistema de seguridad no vaya a ser que lite inicie o haga el comando varias veces 
var peticionCumplida = "no";

var voces = localStorage.getItem("voz");
if (voces == null) {
    localStorage.setItem("voz",0);
    voces = localStorage.getItem("voz");
}
console.log("Datos Cargados")



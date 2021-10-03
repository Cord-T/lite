var frase;
var respuesta;
var url;
var chistes = [
    "Hola, ¿está Agustín?.. No.. estoy incomodín.", 
    "¿Cuál es la fruta más divertida?.. La naranja ja ja ja ja",
    " Buenos días, me gustaría alquilar Batman Para siempre.. No es posible. tiene que devolverla mañana.",
    "¡Camarero! Este filete tiene muchos nervios..  Normal. es la primera vez que se lo comen.",
    "¿Qué le dice un techo a otro?.. Techo de menos.",
    "Buenos días, quería una camiseta de un personaje inspirador..¿Ghandi?..No. mediani.",
    "¿Qué le dice una iguana a su hermana gemela?.. Somos iguanitas",
    "Buenos días. Busco trabajo.. ¿Le interesa de jardinero?.. ¿Dejar dinero?. ¡Si lo que busco es trabajo!",
    " Abuelo, ¿por qué estás delante del ordenador con los ojos cerrados?.. Es que Windows me ha dicho que cierre las pestañas.",
    "Hola. soy paraguayo y quiero pedirle la mano de su hija para casarme con ella.. ¿Para qué?. Paraguayo."
];
var atender = [
    "¿dime "+username+"?", 
    "¿si señor?",
    "¿en que le soy utíl?",
    "¿dime?",
    "¿que hago?",
    "aqui estoy"
];
const fecha = new Date();
var month = fecha.getUTCMonth();
var today = fecha.getDate();
var hour = fecha.getHours();
var minutes = fecha.getMinutes();
let mes = JSON.stringify(month);
let hoy = JSON.stringify(today);
let hora = JSON.stringify(hour);
let minutos = JSON.stringify(minutes);
var in_game = false;
var my_turn = false;
var fi1 = "base";
var fi2 = "base";
var fi3 = "base";
var fi4 = "base";
let ficha_1 = "inactiva";
let ficha_2 = "inactiva";
let ficha_3 = "inactiva";
let ficha_4 = "inactiva";
let decition;
let permitir_sacar_otras_fichas = false;

console.log("Variables cargadas");
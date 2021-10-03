<?php
// comprobar si tenemos los parametros w1 y w2 en la URL
if (isset($_GET["destino"]) && isset($_GET["asunto"]) && isset($_GET["mensaje"])) {
    // asignar w1 y w2 a dos variables
    $to = "5mentarius@gmail.com";
    $subject = "My subject";
    $txt = "Hello world!";
    $headers = "From: system@gmail.com" . "\r\n" .
    "CC: 5mentarius@gmail.com";
 
    // mostrar $phpVar1 y $phpVar2
    mail($to,$subject,$txt,$headers);
  
  echo "<p>enviando</p>";
} else {
    echo "<p>No parameters</p>";
}
// echo"<script>alert('lol')</script>";

?>
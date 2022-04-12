<?php

$para= "globaltrust.fl@gmail.com";
$asunto= "menjase desde pagina Global Trust FL";

$mailheader = "From: ".$_POST["email"]."\r\n";
$mailheader .= "Replay-To: ".$_POST["email"]."\r\n";
$mailheader .= "Content-type: text/html; charset=utf-8\r\n";

$MESSAGE_BODY = "Nombre: ".$_POST["name"]."\n";
$MESSAGE_BODY .= "\n<br>Email: ".$_POST["email"]."\n";
$MESSAGE_BODY .= "\n<br>Mensaje: ".n12br($_POST["name"])."\n";


mail($para , $asunto, $MESSAGE_BODY, $mailheader) or die("Error al enviar email !!");

$mailheader= 

header('Location: http://globaltrust.com.ar/index.html') 

?>
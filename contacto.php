<?php
$nombre = $_POST['nombre'];
$email = $_POST['email'];
$telefono = $_POST['telefono'];
$mensaje = $_POST['mensaje'];
$para = 'gastferreyra11@gmail.com';
$titulo = 'Contacto Web';
$header = 'From: ' . $email;
$msjCorreo = "Nombre: $nombre\n E-Mail: $email\n Telefono: $telefono\n Mensaje:\n $mensaje";

if ($_POST['submit']) {
if (mail($para, $titulo, $msjCorreo, $header)) {
echo "<script language='javascript'>
alert('Su consulta ha sido enviada. Muchas gracias.');
window.location.href = 'index.html';
</script>";
} else {
echo 'El envío ha fallado. Por favor, intentelo nuevamente. ';
}
}
?>

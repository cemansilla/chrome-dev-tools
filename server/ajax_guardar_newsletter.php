<?php
$response = [
  'error' => false,
  'message' => $_POST['email'] . ' guardado correctamente!'
];
http_response_code(500);
echo "Ha ocurrido un error en el servidor :(";
//echo json_encode($response);
?>
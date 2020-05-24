<?php
$data = range(1, $_GET['cantidad']);

echo json_encode($data);
?>
<?php
session_start();
if(isset($_SESSION['idUsers'])){

	require "connection.php";
	$id=$_GET['id'];

	$stmt=$db->prepare("SELECT Tili_numero, Saldo FROM tili WHERE idTili = :id");
	$stmt->bindParam(':id',$id);
	$stmt->execute();
	$result = $stmt->fetchAll(PDO::FETCH_ASSOC);

	echo json_encode($result);
}
else{

}

	?>

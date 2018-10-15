<?php
	include 'connection.php';

	$name=$_POST['idTilitapahtumat'];
	$name=$_POST['Otto'];
	$author=$_POST['viite'];

	$sql=$db->prepare("INSERT INTO tilitapahtumat (idTilitapahtumat,Otto,viite) VALUES(:a_idTilitapahtumat,:a_Otto,:a_viite)");
	$sql->bindParam(':a_idTilitapahtumat',$idTilitapahtumat);
	$sql->bindParam(':a_Otto',$Otto);
	$sql->bindParam(':a_viite',$viite);
	$sql->execute();

	http_response_code(201);
?>

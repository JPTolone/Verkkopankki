<?php
session_start();
if(isset($_SESSION['idUsers'])){
	require "connection.php";
	$sql = "SELECT Etunimi, Sukunimi, Osoite, Puhelinnumero FROM asiakas";
	$resultObject = $db->query($sql);
	$resultArray = $resultObject->fetchAll(PDO::FETCH_ASSOC);
	echo json_encode($resultArray);
}
else{

}
?>

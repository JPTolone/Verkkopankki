<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>Simple RestApi</title>
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
      <script src="rest.js"></script>
  </head>
  <body>
<div id="login_status">
  <?php
  session_start();
    if(isset($_SESSION['username'])){
      echo 'Tervetuloa '.$_SESSION['username'].'<br>';
      echo '<a href="../api/logout.php"><button>Kirjaudu ulos</button></a>';
    }
    else {
      echo 'Tervetuloa vieras ';
      echo '<a href="login.html"><button>Kirjaudu</button></a>';
    }
  ?>
  <hr>
</div>

<div class="container">

    <p>
        Omat Tiedot
        <button class="btn btn-primary" onclick="GetBooks()">Omat Tiedot</button>

        <br>
        <br>
        <br>
        Tilitiedot
        <input type="text" id="tili_id">
        <button class="btn btn-primary" onclick="GetBooks_by_id()">Valitse Tili</button>
        <br>
        <br>
        Pankkikortti
        <input type="text" id="pankkikortti_id">
        <button class="btn btn-primary" onclick="GetBooks_by_id_2()">Valitse Pankkikortti</button>

    </p>

    <p>
        Uusi maksu
        <br>
        <form id='BookForm'>
            <label for="idTilitapahtuma">idTiitapahtuma</label> <br>
            <input type="text" name="nidTilitapahtuma" id="idTilitapahtuma"> <br>
            <label for="author">Otto</label> <br>
            <input type="text" name="Otto" id="Otto"> <br>
            <label for="author">Viite</label> <br>
            <input type="text" name="viite" id="viite"> <br>
            <label for="author">Tililtä</label> <br>
            <input type="text" id="tili_id">
            <button class="btn btn-primary" onclick="GetBooks_by_id()">Valitse Tili</button>
        </form>
        <br>
        <button onclick="AddBook()">Suorita maksu</button>
    </p>








    

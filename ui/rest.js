function GetBooks() {
  var url = '../api/get_books.php';
  var xhttp = new XMLHttpRequest();
  xhttp.open('GET', url, true);
  var jsonData = '';
  var data = '<table class="table table-bordered table-hover">';
  data += '<tr><th>Etunimi</th><th>Sukunimi</th><th>Osoite</th><th>Puhelinnumero</th>';
  xhttp.onreadystatechange = function() {
    if (xhttp.readyState == 4 && xhttp.status == 200) {
      jsonData = JSON.parse(xhttp.responseText);
      for (x in jsonData) {
        data +=
          '<tr><td>' +
          jsonData[x].Etunimi +
          '</td><td>' +
          jsonData[x].Sukunimi +
          '</td><td> ' +
          jsonData[x].Osoite +
          '</td><td> ' +
          jsonData[x].Puhelinnumero +
          '</td><td> ' ;
      }
      data += '</table>';
      document.getElementById('results').innerHTML = data;
    }
  };
  xhttp.send();
}

function GetBooks_by_id() {
  var id = document.getElementById('tili_id').value;
  var url ='../api/get_books_by_id.php?id=';
  url += id;
  var xhttp = new XMLHttpRequest();
  xhttp.open('GET', url, true);
  var jsonData = '';
  var data = '<table border="1">';
  data += '<tr><th>Tilinumero</th><th>Saldo</th></tr>';
  xhttp.onreadystatechange = function() {
    if (xhttp.readyState == 4 && xhttp.status == 200) {
      jsonData = JSON.parse(xhttp.responseText);
      for (x in jsonData) {
        data +=
          '<tr><td>' +
          jsonData[x].Tili_numero +
          '</td><td> ' +
          jsonData[x].Saldo +
          '</td></tr>';
      }
      data += '</table>';
      document.getElementById('results').innerHTML = data;
    }
  };
  xhttp.send();
}

function GetBooks_by_id_2() {
  var id = document.getElementById('pankkikortti_id').value;
  var url ='../api/get_books_by_id_2.php?id=';
  url += id;
  var xhttp = new XMLHttpRequest();
  xhttp.open('GET', url, true);
  var jsonData = '';
  var data = '<table border="1">';
  data += '<tr><th>Pankkikortti</th><th>Saldoraja</th></tr>';
  xhttp.onreadystatechange = function() {
    if (xhttp.readyState == 4 && xhttp.status == 200) {
      jsonData = JSON.parse(xhttp.responseText);
      for (x in jsonData) {
        data +=
          '<tr><td>' +
          jsonData[x].P_K_numero +
          '</td><td> ' +
          jsonData[x].Luottoraja +
          '</td></tr>';
      }
      data += '</table>';
      document.getElementById('results').innerHTML = data;
    }
  };
  xhttp.send();
}



function AddBook() {
	var url = '../api/add_book.php';
	var xhttp = new XMLHttpRequest();
	xhttp.open('POST', url, true);
	var form = document.getElementById('BookForm');
	var formData = new FormData(form);
	xhttp.onreadystatechange = function() {
		if (xhttp.readyState == 4 && xhttp.status == 201) {
		document.getElementById('results').innerHTML = 'Maksaminen onnistui';
		} else {
		document.getElementById('results').innerHTML = 'Virhe';
		}
	};
	xhttp.send(formData);
}

function DeleteBook() {
  var id = document.getElementById('delete_id').value;
  var url ='../api/delete_books.php?id=';
  url += id;
  var xhttp = new XMLHttpRequest();
  xhttp.open('DELETE', url, true);
  xhttp.onreadystatechange = function() {
    if (xhttp.readyState == 4 && xhttp.status == 201) {
  		document.getElementById('results').innerHTML = 'Kirjan poisto onnistui';
  		} else {
  		document.getElementById('results').innerHTML = 'Virhe';
  		}
  };
  xhttp.send();
}

function UpdateBook() {
	var url = '../api/update_book.php';
	var xhttp = new XMLHttpRequest();
	xhttp.open('POST', url, true);
	var form = document.getElementById('UpdateForm');
	var formData = new FormData(form);
	xhttp.onreadystatechange = function() {
		if (xhttp.readyState == 4 && xhttp.status == 201) {
		document.getElementById('results').innerHTML = 'Kirjan muokkaus onnistui';
		} else {
		document.getElementById('results').innerHTML = 'Virhe';
		}
	};
	xhttp.send(formData);
}

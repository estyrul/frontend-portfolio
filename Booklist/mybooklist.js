document.getElementById('book-form').addEventListener('submit', save);

function save(e) {
	
	var title= document.getElementById('title').value;
	var author= document.getElementById('author').value;
	var isbn= document.getElementById('isbn').value;

	var	inputs = {
		title,
		author,
		isbn
	};
	
	if (title=='') {
		alert('Please input the book title');
		
		return false;
	}

	if (author=='') {
		alert('Please input the book author');
		
		return false;
	}

	if (localStorage.getItem('Booklist') === null) {

		var	Booklist = [];
		console.log(title);
		console.log(author);
		Booklist.push(inputs);
		console.log(Booklist);
		window.localStorage.setItem('Booklist', JSON.stringify(Booklist));
		cleartxtbox();
		
	}
	else {
		var Booklist = JSON.parse(localStorage.getItem('Booklist'));
		Booklist.push(inputs);
		window.localStorage.setItem('Booklist', JSON.stringify(Booklist));
		cleartxtbox();
	}
	fetchBook();
	e.preventDefault();

}

function deleteBookmark(title){
	var Booklist = JSON.parse(localStorage.getItem('Booklist'));
	console.log(title);
	for (var i = 0; i < Booklist.length; i++) {
		if (Booklist[i].title ==title){
			Booklist.splice(i,1);
		}
	}
	window.localStorage.setItem('Booklist', JSON.stringify(Booklist));
	
	fetchBook();

}
function fetchBook(){
	var Booklist = JSON.parse(localStorage.getItem('Booklist'));
	var booklist = document.getElementById('book-list');
	booklist.innerHTML = '';


	for (var i = 0; i < Booklist.length; i++) {
		var title=Booklist[i].title;
		var author=Booklist[i].author;
		var isbn=Booklist[i].isbn;

		booklist.innerHTML+='<tr><td>'+title+'</td>'+'<td>'+author+'</td>'+'<td>'+isbn+ '</td>'+
							'<td><a onclick="deleteBookmark(\''+title+'\')" href="#" class="btn btn-danger btn-sm">X</a></td>'+
							'</tr>';
		
	}

}

function cleartxtbox(){
		document.getElementById('title').value='';
		document.getElementById('author').value='';
		document.getElementById('isbn').value='';
}


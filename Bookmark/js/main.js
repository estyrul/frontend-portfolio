document.getElementById('myform').addEventListener('submit', save);

function save(e) {
	
	var sitename= document.getElementById('sitename').value;
	var url= document.getElementById('url').value;

	var	inputs = {
		sitename,
		url
	};

	
	if (sitename=='') {
		alert('Please input the sitename');
		
		return false;
	}

	if (url=='') {
		alert('Please input the url');
		
		return false;
	}


	var expression = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi;
	var regex = new RegExp(expression);

	if(!url.match(regex) ){
		
		cleartxtbox();
		alert('Please input a valid url');
		
		return false;

	}
	else if (localStorage.getItem('Bookmarkresults') === null) {
		
		var	Bookmarkresults = [];
		Bookmarkresults.push(inputs);
		console.log(Bookmarkresults);
		window.localStorage.setItem('Bookmarkresults', JSON.stringify(Bookmarkresults));
		cleartxtbox();
		
	}
	else {
		var Bookmarkresults = JSON.parse(localStorage.getItem('Bookmarkresults'));
		Bookmarkresults.push(inputs);
		window.localStorage.setItem('Bookmarkresults', JSON.stringify(Bookmarkresults));
		cleartxtbox();
	}
	fetchBookmarks();
	e.preventDefault();

}

function deleteBookmark(url){
	var Bookmarkresults = JSON.parse(localStorage.getItem('Bookmarkresults'));
	console.log(url);
	for (var i = 0; i < Bookmarkresults.length; i++) {
		if (Bookmarkresults[i].url ==url){
			Bookmarkresults.splice(i,1);
		}
	}
	window.localStorage.setItem('Bookmarkresults', JSON.stringify(Bookmarkresults));
	
	fetchBookmarks();

}
function fetchBookmarks(){
	var Bookmarkresults = JSON.parse(localStorage.getItem('Bookmarkresults'));
	var Bookmarkresult = document.getElementById('Bookmarkresult');
	Bookmarkresult.innerHTML = '';


	for (var i = 0; i < Bookmarkresults.length; i++) {
		var sitename=Bookmarkresults[i].sitename;
		var url=Bookmarkresults[i].url;

		Bookmarkresult.innerHTML += '<div class="well">' +
		                            '<h4>'+sitename+'\t'+
		                            
		                            '<a class="btn btn-success" target="_blank" href="https://'+url+'">Visit</a>'+'\t'+

		                            '<a onclick="deleteBookmark(\''+url+'\')" class="btn btn-danger" href="#">Delete</a>'+
		                            '</h4>'+
		                            '</div>';
	}

}

function cleartxtbox(){
		document.getElementById('sitename').value='';
		document.getElementById('url').value='';
}


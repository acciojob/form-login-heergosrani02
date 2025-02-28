function getFormvalue(event) {
	event.preventDefault();
	
	let fname = document.querySelector('input[name="fname"]').value;
	let lname = document.querySelector('input[name="lname"]').value;

	alert(fname + ' ' + lname);
}


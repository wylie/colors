window.onload = init;

function init() {
	console.log('SHAZAM');
	var submit = document.getElementById('submit');
	submit.onclick = getValue;
}

function getValue() {
	var input = document.getElementById('input').value;
	var inputSplit = input.split('#');
	console.log(inputSplit[1]);

	var liOne = document.getElementById('id-one');
	liOne.setAttribute('style', 'background-color: #' + inputSplit[1]);
}
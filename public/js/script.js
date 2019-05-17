var convertBtn = document.querySelector('.convert-button');
var URLinput = document.querySelector('.URL-input');
convertBtn.addEventListener('click', () => {
	console.log(`URL: ${URLinput.value}`);	
	sendURL(URLinput.value);
});

function sendURL(URL) {
	window.location.href = `http://anjitha-app-anjitha-app.1d35.starter-us-east-1.openshiftapps.com/download?URL=${URL}`;
}

var convertBtn = document.querySelector('.convert-button');
var URLinput = document.querySelector('.URL-input');
let prt = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080;
let ipAdd = process.env.IP || process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0';

convertBtn.addEventListener('click', () => {
	console.log(`URL: ${URLinput.value}`);	
	sendURL(URLinput.value);
});

function sendURL(URL) {
	window.location.href = `http://0.0.0.0:8080/download?URL=${URL}`;
}

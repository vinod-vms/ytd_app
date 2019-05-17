var convertBtn = document.querySelector('.convert-button');
var URLinput = document.querySelector('.URL-input');
//let port = process.env.PORT || 4000;
//let server_ip_address = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1';

convertBtn.addEventListener('click', () => {
	console.log(`URL: ${URLinput.value}`);	
	sendURL(URLinput.value);
});

function sendURL(URL) {
	window.location.href = `${window.location.href}/download?URL=${URL}`;
}
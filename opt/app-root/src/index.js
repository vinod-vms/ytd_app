const express = require('express');
const cors = require('cors');
const ytdl = require('ytdl-core');
var path = require('path'); 
const exphbs = require('express-handlebars');

const app = express();

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.use(cors());
app.use(express.static(path.join(__dirname, '/public')));

app.get('/', function (req, res) {
    res.render('home');
});


let port = process.env.PORT || 4000;
let server_ip_address = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1';



app.listen(port, server_ip_address, () => {
	console.log('Server Works !!! At port 4000');
});

app.get('/download', (req,res) => {
	var URL = req.query.URL;
	res.header('Content-Disposition', 'attachment; filename="video.mp4"');
	ytdl(URL, {
		format: 'mp4'
	}).pipe(res);
});
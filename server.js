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


var port = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080,
ip = process.env.IP || process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0',



app.listen(port, ip, () => {
	console.log('Server Works !!! At port 8080');
});

app.get('/download', (req,res) => {
	var URL = req.query.URL;
	res.header('Content-Disposition', 'attachment; filename="video.mp4"');
	ytdl(URL, {
		format: 'mp4'
	}).pipe(res);
});

module.exports = app ;

const express = require('express');
const cors = require('cors');
const ytdl = require('ytdl-core');

const app = express();

let port = process.env.PORT || 4000;
var server_ip_address = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1'

app.use(cors());

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
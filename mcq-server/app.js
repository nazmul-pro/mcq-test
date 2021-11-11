const http = require('http');
const express = require('express');
var path = require('path')

var app = express()
const hostname = 'localhost';
const port = 3001;

app.use(express.static(__dirname + '/client'));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/client/index.html'))
});
app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
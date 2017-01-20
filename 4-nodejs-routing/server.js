var http = require('http');
var app = require('./prac-app');





http.createServer(app.handleRequest).listen(8000);
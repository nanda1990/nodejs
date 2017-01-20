var http = require('http');

function nandan(request, response){

    response.writeHead(200,{'Content-Type':'text/plain'});
    response.write('Hello World');
    response.end();

}
http.createServer().listen(3000);

var http = require('http');
var module1 = require('./module1');
var module2 = require('./module2');

// first import first module1  
/*
  function onRequest(request, response) {

      response.writeHead(200,{'Content-Type':'text/plain'});
      response.write(module1.myString);
      module1.myFunction();
      response.end();
  } */

/*  function onRequest(request,response){

    response.writeHead(200,{'Content-Type':'text/plain'});
    response.write(module2.myVariable);
    module2.myFunction();
    response.end();
  }*/

/*http.createServer(onRequest).listen(5000);*/
http.createServer(function(request,response){

    response.writeHead(200,{'Content-Type':'text/plain'});
    response.write(module2.myVariable);
    module2.myFunction();
    response.end();
  }).listen(5000);

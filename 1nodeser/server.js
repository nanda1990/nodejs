var http = require('http'); // 1. Import nodejs http module and take equal to var http

function onRequest(request,response){               //2. create function onRequest pass two argument request and response

      response.writeHead(200,{'Content-Type':'text/plain'}) //3. Define javascript object type in header
      response.write('hello world');  //4. writte content in
      response.end();  //5. after that finish the response

}

http.createServer(onRequest).listen(8000); // 5. take two http methos a. createServer:- in createServer call function argument
                                                  //b. second metho is  listen we define port in

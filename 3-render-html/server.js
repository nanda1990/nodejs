var http = require('http');
var fs = require('fs');   // 1. user fs extention in nodejs module


function onRequest(request,response){
	response.writeHead(200,{'Content-Type':'text/html'});      // 2. javascript content type show in browser html view
 	fs.readFile('./index.html', null, function(error,data){              // fs readfile method show content w
		if(error){
			response.write(200);
			response.write('this not find here');
		}
		else{
			response.write(data);
		}
			response.end();
	});
		}
 			http.createServer(onRequest).listen(9000);

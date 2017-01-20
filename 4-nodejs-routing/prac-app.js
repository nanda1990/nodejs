var url = require('url');
var fs = require('fs');

	function renderHtml(path,response){

		fs.readFile(path, null, function(error,data){              // fs readfile method show content w
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



module.exports = {

		handleRequest: function(request,response){

			response.writeHead(200,{'Content-Type':'text/html'});

			var path = url.parse(request.url).pathname;

			switch(path){

			case '/':
				renderHtml('./index.html',response);
				break;

				case '/login':
				renderHtml('./login.html',response);
				break;

				default:
				response.writeHead(400);
				response.write('Rout Not Define');
				response.end();

		}

		}
}
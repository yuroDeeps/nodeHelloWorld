var http = require('http');

console.log("Startuje serwer...");

http.createServer(function (request, response){
    response.writeHead(418,{'Content-Type': 'text/html'});
    response.write("Retard!");
    response.end();
}).listen(8080);
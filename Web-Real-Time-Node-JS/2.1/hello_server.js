var http = require('http');
//a função http.createServer() lenvata um servidor e o seu callback function(request, response) apenas é executado quando o servidor recebe uma requisição
var server = http.createServer(function(request, response) {
    response.writeHead(200, { "Content-Type": "text/html" });
    response.write("<h1>Hello World!</h1>");
    response.end();
});

server.listen(3000, function() {
    console.log('Servidor Hello World rodando!');
}); //executando o servidor na porta 3000
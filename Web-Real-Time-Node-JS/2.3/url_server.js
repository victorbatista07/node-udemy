var http = require('http');
var url = require('url');

var server = http.createServer(function(request, response) {
    response.writeHead(200, { "Content-Type": "text/html" });
    response.write("<h1>Dados da query string</h1>");
    var result = url.parse(request.url, true);

    for (var key in result.query) {
        response.write("<h2>" + key + " : " + result.query[key] + "</h2>");
    }

    response.end();
});

server.listen(3000, function() {
    console.log('Servidor http.');
});

/**
 * Esse módulo identifica através do retorno da função url.parser() os seguintes atributos:
 * href: retorna a url completa
 * protocol: retorna o protocolo: 'http'
 * host: retorna o domínio com a porta: 'host.com:8080'
 * auth: retorna dados de autenticação: 'user:pass'
 * hostname: retorna o domínio: 'host.com'
 * port: retorna a porta: '8080'
 * pathname: retorna os pathnames da url: '/p/a/t/h'
 * search: retorna uma query string: '?query=string'
 * path: retorna a concatenação de pathname com query string: '/p/a/t/h?query=string'
 * query: retorna uma query string em JSON: {'query':'string'}
 * hash: retorna ancora da url: '#hash'
 */
/**IMPLEMENTAÇÃO SIMPLES DE UM SERVER HTTP */
var http = require('http');

var server = http.createServer(function(req,res){
    res.end("<html><body>Portal de notícias</body></html>");
});

server.listen(3000);
var mysql = require('mysql');
var connMysql = function(){
    console.log('Conexão DB MySql estabelecida');
    return mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'portal_noticias'
    });
}
module.exports = function(){
    console.log('Autoload carregou o módulo de conexão com o DB');
    return connMysql;
}
   



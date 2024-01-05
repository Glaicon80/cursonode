const mysql = require("mysql2")

const conexao = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user:"root",
    password: "vegita1980",
    database: "controle_atendimento"
})

// teste para verificar se a conexao com o banco foi bem sucedida
conexao.connect(function(err) {
    if (err) {
        console.log("Falha ao conectar ao banco de dados" + err)
        return
    };
    console.log("Conectado ao banco de dados!");
  });

module.exports = conexao
const Sequelize = require('sequelize')

//conexão parametro: banco de dados, usuario, senha, objeto json
const conexao = new Sequelize('sistemadecadastro', 'root', 'vegita1980', {
    host: 'localhost',
    dialect: 'mysql' //tipo de banco
})

//qdo vc quiser exportar mais de uma coisa de um arquivo, vc cria um objeto
module.exports = {
    Sequelize: Sequelize,
    conexao: conexao
}

//vamos exportar o Sequelize e a conexao para os arquivos do model
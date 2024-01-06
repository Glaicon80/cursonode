// fazendo conexao com banco de dados com sequelize
const Sequelize = require('sequelize')

//conexão parametro: banco de dados, usuario, senha, objeto json
const sequelize = new Sequelize('sistemadecadastro', 'root', 'vegita1980', {
    host: 'localhost',
    dialect: 'mysql' //tipo de banco
})

//testar a conexao - é uma promise
sequelize.authenticate().then(function(){
    console.log("conectado ao banco de dados com suceso")
}).catch(function(erro){
    console.log("erro ao se conectar com o banco de dados "+ erro)
})

//criando a tabela postagem - esta tabela tera dois campo titulo varchar
// e conteudo do tipo texto (string tem um limite texto não)
const Postagem = sequelize.define('postagem', {
    titulo: {
        type: Sequelize.STRING
    },
    conteudo: {
        type: Sequelize.TEXT
    }
});

//agora para criar a tabela no banco de dados segue o camando abaixo
//depois que executar o comando abaixo, temos que comenta-lo para nao ficar criando a tabela toda vez
//Postagem.sync({force: true})

/*
Postagem.create({
    titulo: "Um titulo",
    conteudo: "um ttexto muito grande, só que não"
})
*/

const Usuario = sequelize.define('usuarios',{
    nome:{
        type: Sequelize.STRING
    },
    sobrenome:{
        type: Sequelize.STRING
    },
    idade: {
        type: Sequelize.INTEGER
    },
    email:{
        type: Sequelize.STRING
    }
})

/*
Usuario.create({
    nome: "heitor",
    sobrenome: "silva",
    idade: 9,
    email: "heitor.florisbelo@gmail.com"
})
*/

//Usuario.sync({force: true})


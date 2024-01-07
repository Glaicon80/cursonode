//aqui vamos criar a tabela de Posts

const db = require('./db')

const Post = db.conexao.define('postagem',{

    titulo: {
        type: db.Sequelize.STRING
    },
    conteudo: {
        type: db.Sequelize.TEXT
    }
});

//Agora vamos exportar essa variavel pois vai ser
// com ela que iremos criar, deletar, atualizar registros na tabela.
module.exports = Post


//Post.sync({force:true})
const express = require('express')
const app = express()
const port = 8081
const handlebars = require('express-handlebars')
const Sequelize = require('sequelize')


//configurando o handlebars
//vamos informar ao express qual vai ser a template engine que iremos utilizar
//que no caso é o handlebars, e vamos setar o handlebars com nossa engine de views
//main vai ser o template principal do handlebars
app.engine('handlebars', handlebars.engine({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

//conexão parametro: banco de dados, usuario, senha, objeto json
const sequelize = new Sequelize('sistemadecadastro', 'root', 'vegita1980', {
    host: 'localhost',
    dialect: 'mysql' //tipo de banco
})

//rotas
app.get("/cad", function(req,res){
    res.render('formulario')
})

app.post("/add",function(req,res){
    res.send("adicionar formulario")
})

app.listen(port, function(){
    console.log("Servidor rodando na porta: " + port)
})

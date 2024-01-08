const express = require('express')
const app = express()
const port = 8081
const handlebars = require('express-handlebars')
const bodyparser = require('body-parser')
const Post = require('./models/Post')


//configurando o handlebars
//vamos informar ao express qual vai ser a template engine que iremos utilizar
//que no caso é o handlebars, e vamos setar o handlebars com nossa engine de views
//main vai ser o template principal do handlebars
app.engine('handlebars', handlebars.engine({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

//configurando o body parser
app.use(bodyparser.urlencoded({extended: true}))
app.use(bodyparser.json())


//rotas

// findAll() vamos listas todos os itens da tabela postagems, tbm é uma promise.
// agora alem de chamar o arquivo home tbm vamos enviar os dados
// para isso usamos {} com objeto dentro. findAll() vai trazer um array de objetos
app.get("/",function(req,res){
    Post.findAll({order:[['id','desc']]}).then(function(posts){
        //console.log(posts) aqui a gente pode ver a lista de array de objetos
        res.render('home',{posts:posts})
    })
              .catch(function(erro){
                  res.send("Falha ao listas posts: " + erro)
              })
})

//selecinar um unico registro pelo id usamos o metodo findOne()
app.get("/selecionar/:id",function(req,res){
    Post.findOne({where:{'id':req.params.id}})
    .then(function(posts){
        //console.log(posts)
        res.render('formAtualizar',{posts:posts})    
    })
    .catch(function(erro){
        res.send("Falha ao selecionar post : " + erro)
    })
})


app.get("/cad", function(req,res){
    res.render('formulario')
})

//vamos adicionar um registro na tabela postagems com o metodo create()
app.post("/add",function(req,res){
   //create é uma promise, ou seja, vai ter then e o catch
    Post.create({
    titulo: req.body.titulo,
    conteudo: req.body.conteudo
   }).then(function(){
        res.redirect('/')
   })
     .catch(function(error){
        res.send('Houve um erro no registro do post: '+ error)
     })
})


//vamos atulizar um registro na tabela postagems com o metodo update().
app.post("/atualizar",function(req,res){
     Post.update({titulo: req.body.titulo, conteudo: req.body.conteudo},{where:{'id':req.body.id}})
     .then(function(){
         res.redirect('/')
    })
      .catch(function(error){
         res.send('Houve um erro ao atualizar o post: '+ error)
      })
 })


 //vamos deletar um registro na tabela postagems com o metodo destroy()
app.get("/deletar/:id",function(req,res){
    //create é uma promise, ou seja, vai ter then e o catch
     Post.destroy({where:{'id':req.params.id}})
     .then(function(){
         res.redirect('/')
    })
      .catch(function(error){
         res.send('Houve um erro ao deletar o post: '+ error)
      })
 })


app.listen(port, function(){
    console.log("Servidor rodando na porta: " + port)
})


const express = require('express')

const app = express()


app.get("/",function(req,res){
    res.send("Seja bem vindo ao meu app!")
})

//criando uma nova rota
app.get("/sobre/:nome/:idade",function(req,res){
    res.send("<h1>Ola "+req.params.nome+"</h1>")
})


app.listen(8081,function(){
    console.log("Servidor rodando na url http://localhost:8081")
})





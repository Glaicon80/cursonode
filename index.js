const express = require("express")
const app = express()
const port = 3000
const routers = require("./routers")
const conexao = require("./infraestrutura/conexao")
const tabelas = require("./infraestrutura/tabelas")


//configuração

tabelas.init(conexao)

//rotas

routers(app)

app.listen(port,(error)=>{
if(error){
    console.log("Erro no servidor "+ error)
    return
}
console.log("Servidor rodando na porta "+ port )
})
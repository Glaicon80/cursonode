//Carregando modulos
    const express = require('express')
    const handlebars = require('express-handlebars')
    const bobyParser = require('body-parser')
    const mongoose = require('mongoose')
    const path = require('path')

    const app = express()
    const port = 8081
    const admin = require('./rotas/admin')

//configurações
    //Body parser
    app.use(bobyParser.urlencoded({extended:true}))
    app.use(bobyParser.json())
    //handlebars
    app.engine('handlebars',handlebars.engine({defaultLayout:'main'}))
    app.set('view engine','handlebars')
    //mongoose
        //em breve

    //public
    //vamos informar para o express onde esta a pasta dos arquivos estaticos
    //path.join vai informar o caminho absoluto (__dirname) ate a pasta public
    app.use(express.static(path.join(__dirname,"public")))

//rotas
    //pagina principal do site
    app.get('/',(req,res)=>{
        res.send('Pagina principal do site')
    })

    //todas as rotas do arquivo admin.js vão estar lincadas no prefixo "/admin"
    //lembrando que o prefixo não é obrigatorio.
    app.use('/admin',admin)

//outros

app.listen(port,()=>{
    console.log("Servidor rodando no link http://localhost/"+port)
})
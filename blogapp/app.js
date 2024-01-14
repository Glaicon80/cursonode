//Carregando modulos
    const express = require('express')
    const handlebars = require('express-handlebars')
    const bobyParser = require('body-parser')
    const mongoose = require('mongoose')

    const app = express()
    const port = 8081

//configurações
    //Body parser
    app.use(bobyParser.urlencoded({extended:true}))
    app.use(bobyParser.json())
    //handlebars
    app.engine('handlebars',handlebars.engine({defaultLayout:'main'}))
    app.set('view engine','handlebars')
    //mongoose
        //em breve


//rotas


//outros

app.listen(port,()=>{
    console.log("Servidor rodando no link http://localhost/"+port)
})
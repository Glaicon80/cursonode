const atendimentoRoute = require("./atendimentoRoute")

module.exports = (app,express)=>{
    app.use(express.json())
    app.use(express.urlencoded({extended: true}))
    app.use(atendimentoRoute)
}

// aqui vamos adicionar duas middware para configurar todas as rotas
// app.use(express.json()) aqui todas as rotas vão aceitar requisições enviadas via json
//app.use(express.urlencoded({extended: true})) aqui todas as rotas vão aceitar formularios html via post
// app.use(atendimentoRoute) essa middware vai apontar para todas as rotas do arquivo atendimentoRoute.js
// e é importante que ela fica abaixo das outras duas, para receber as configurações
// lembrando que a middware que esta mais acima vai ser executada primeiro. Por isso a ordem é muito importante
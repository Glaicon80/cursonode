// o modulo http é um modulo para conecção com banco de dados
//e lidar com requesições http (é um servidor http). Esse modulo é nativo, nao precisa ser baixado
//observe que modulos que são bibliotecas nao precisa colocar o caminho "./ ../"
// ele é muito limitado por isso é melhor baixar o express
let http = require('http')

// a variavel http vai receber o modulo http. o metodo createserver()
//vai criar o servidor e o metodo listen vai ficar ouvindo as requisições na porta 8081
//servidor criado
http.createServer(function(req,res){
//res é um resposta e end vai enviar uma resposta para quem acessou o servidor    
res.end("ola mundo!!")
}).listen(8081)

console.log("servidor esta rodando na porta 8081.")





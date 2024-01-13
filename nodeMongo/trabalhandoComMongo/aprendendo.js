const mongoose = require('mongoose')

//configurando o mongoose
//vamos nos conectar ao banco. o endereço é localhost e o 
//nome do banco vai ser aprendendo. Obs: ao fazer isso ele vai conectar
//e criar o banco automaticamente, se ele nao existir vai ser criado
mongoose.Promise = global.Promise
mongoose.connect("mongodb://localhost/aprendendo", {
    useMongoClient:true
}).then(()=>{
// se sucesso
console.log("MongoDB conectado...")

}).catch((error)=>{
// se acontecer um erro    
console.log("Houve um erro ao se conectar ao mongoDB: " + error)
})
const mongoose = require('mongoose')

//configurando o mongoose
//vamos nos conectar ao banco. o endereço é localhost e o 
//nome do banco vai ser aprendendo. Obs: ao fazer isso ele vai conectar
//e criar o banco automaticamente, se ele nao existir vai ser criado
mongoose.Promise = global.Promise
mongoose.connect("mongodb://localhost/aprendendo", {
    //useMongoClient:true
}).then(()=>{
// se sucesso
console.log("MongoDB conectado...")

}).catch((error)=>{
// se acontecer um erro    
console.log("Houve um erro ao se conectar ao mongoDB: " + error)
})

//vamos criar um modelo que vai representar os parametros que vai ter
//os documentos dentro da collection. Parametro do tipo string vai receber 
//qualquer tipo de texto. parametro do tipo number vai receber qualquer tipo de numero
//require:true quer dizer que esse parametro é obrigatorio, se nao por nada
//vai ser require:false por padrao.
const UsuarioSchema = mongoose.Schema({
    nome:{
        type:String,
        require:true
    },
    sobrenome:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    idade:{
        type:Number,
        require:true
    },
    pais:{
        type:String,
    }
})

//vamos criar a collection "usuarios" dentro do banco de dados "aprendendo"
//e pessar o modelo de documentos (UsuarioSchema) que essa colection vai ter
mongoose.model('usuarios',UsuarioSchema)

//agora vamos adicionar um documento na collection "usuarios"
//primeiro vamos passar a collection para uma constante
const usuario = mongoose.model('usuarios')

// agora vamos criar uma instancia da collection para passar os valores
//metodo save() para salvar usuario e then e catch para ver se tudo deu certo
new usuario({
    nome:"glaicon",
    sobrenome:"florisbelo",
    email:"glaicon.florisbelo@gmail.com",
    idade:43,
    pais:"Brasil"
}).save().then(()=>{
    console.log("Usuario adicionado com sucesso!")
}).catch((err)=>{
    console.log("Erro ao adicionar usuarios: "+ err)
})
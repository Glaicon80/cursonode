// arquivo onde vai conter todas as rotas administrativas
const express = require('express')
//este é o componente que utilizamos para fazer rotas em arquivos separados
const router = express.Router()

//rota da pagina principal do painel administrativos
router.get('/', (req,res)=>{
    res.render("admin/index")
})

//rota para os posts
router.get('/posts',(req,res)=>{
    res.send("Página de posts")
})

//rota para cadastrar categorias
router.get('/categorias',(req,res)=>{
    res.send('Página de categorias')
})



//temos que esportar as rotas no final do arquivo
module.exports = router
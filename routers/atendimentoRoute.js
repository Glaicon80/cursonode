const express = require("express")
const router = express.Router()
const atendimentoControler = require("../controler/atendimentoControler")

router.get("/atendimentos",(req,res)=>{
    const resposta = atendimentoControler.buscar()
    res.send(resposta)
})

router.post("/atendimento",(req,res)=>{
    const resposta = atendimentoControler.criar()
    res.send(resposta)
})

router.put("/atendimento/:id",(req,res)=>{
    const id = req.params.id
    const resposta = atendimentoControler.alterar(id)
    res.send(resposta)
})

router.delete("/atendimento/:id",(req,res)=>{
    const id = req.params.id
    const resposta = atendimentoControler.deletar(id)
    res.send(resposta)
})

module.exports = router
const express = require("express")
const router = express.Router()
const atendimentoControler = require("../controler/atendimentoControler")



router.get("/atendimentos",(req,res)=>{
    const listaAtendimento = atendimentoControler.buscarTodos()
    listaAtendimento.then(atendimentos => res.status(200).json(atendimentos))
                    .catch(error => res.status(400).json(error.message()))
})

router.get("/atendimento/:id",(req,res)=>{
    const id = req.params.id
    const listaAtendimento = atendimentoControler.buscar(id)
    listaAtendimento.then(atendimentos => res.status(200).json(atendimentos))
                    .catch(error => res.status(400).json(error))
})

router.post("/atendimento",(req,res)=>{
    const novoAtendimento = req.body
    const criarAtendimento = atendimentoControler.criar(novoAtendimento)
    criarAtendimento.then(atendimentos => res.status(201).json(atendimentos))
                    .catch(error => res.status(400).json(error))
})

router.put("/atendimento",(req,res)=>{
    const alterarAtendimento = req.body
    const alterar = atendimentoControler.alterar(alterarAtendimento)
    alterar.then(atendimentos => res.status(201).json(atendimentos))
                    .catch(error => res.status(400).json(error))
})

router.delete("/atendimento/:id",(req,res)=>{
    const id = req.params.id
    const deletar = atendimentoControler.deletar(id)
    deletar.then(atendimentos => res.status(201).json(atendimentos))
    .catch(error => res.status(400).json(error))
})

module.exports = router
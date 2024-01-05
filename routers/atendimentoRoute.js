const express = require("express")
const router = express.Router()

router.get("/atendimentos",(req,res)=>{
    res.send("listando atendimentos...")
})

router.post("/atendimento",(req,res)=>{
    res.send("criando novo atendimento")
})

router.put("/atendimento/:id",(req,res)=>{
    const id = req.params.id
    res.send(`atualizando atendimento ${id}`)
})

router.delete("/atendimento/:id",(req,res)=>{
    const id = req.params.id
    res.send(`excluindo atendimento ${id}`)
})

module.exports = router
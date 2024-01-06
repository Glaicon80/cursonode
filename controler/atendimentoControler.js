const atendimentoModel = require("../model/atendimentoModel")
class AtendimentoControler{

    buscarTodos(){
        return atendimentoModel.listarTodos()
    }

    buscar(id){
        return atendimentoModel.listar(id)
    }

    criar(novoAtendimento){
        return atendimentoModel.criar(novoAtendimento)
    }

    alterar(alterarAtendimento){
      
        return atendimentoModel.alterar(alterarAtendimento)
    }

    deletar(id){
        return atendimentoModel.deletar(id)
    }

}

module.exports = new AtendimentoControler()
class AtendimentoControler{

    buscar(){
        return "Buscando atendimentos.."
    }

    criar(){
        return "criando atendimento.."
    }

    alterar(id){
      
        return "alterando atendimento.. " + id
    }

    deletar(id){
        return "deletando atendimento.. " + id
    }

}

module.exports = new AtendimentoControler()
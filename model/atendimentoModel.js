const conexao = require("../infraestrutura/conexao")

class AtendimentoModel{

    listarTodos(){
        const sql = "select * from atendimentos"
        return new Promise((resolve,reject)=>{conexao.query(sql, (error,resposta)=>{
            if(error){ 
                console.log("Erro na consulta com o banco de dados!")
                reject(error)
            } 
                resolve(resposta)
        })
    })
}

listar(id){
    const sql = "select * from atendimentos where id = ?"
    return new Promise((resolve,reject)=>{conexao.query(sql, id, (error,resposta)=>{
        if(error){ 
            console.log("Erro na consulta com o banco de dados!")
            reject(error)
        } 
            resolve(resposta)
    })
})
}

criar(novoAtendimento){
    const sql = "insert into atendimentos set ?"
    return new Promise((resolve,reject)=>{conexao.query(sql,novoAtendimento, (error,resposta)=>{
        if(error){ 
            console.log("Erro na criação do registro no banco de dados!")
            reject(error)
        } 
            resolve(this.listarTodos())
    })
})
}   

alterar(alterarAtendimento){
    const sql = "update atendimentos set ? where id = ?"
    return new Promise((resolve,reject)=>{conexao.query(sql, [alterarAtendimento, alterarAtendimento.id], (error,resposta)=>{
        if(error){ 
            console.log("Erro na consulta com o banco de dados!")
            reject(error)
        } 
            resolve(this.listar(alterarAtendimento.id))
    })
})
}

deletar(id){
    const sql = "delete from atendimentos where id = ?"
    return new Promise((resolve,reject)=>{conexao.query(sql, id, (error,resposta)=>{
        if(error){ 
            console.log("Erro na consulta com o banco de dados!")
            reject(error)
        } 
            resolve(this.listarTodos())
    })
})
}

}

module.exports = new AtendimentoModel()
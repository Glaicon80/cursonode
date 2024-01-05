class Tabelas {
    //a conexao vai ser enviada como parametro no metodo init
    //e vai chamar o metodo criarTabelaAtendimentos logo em seguida
    init(conexao){
        this.conexao = conexao
        this.criarTabelaAtendimentos()
    }

    criarTabelaAtendimentos(){
        //aqui vamos montar a query que vai criar uma tabela
        //é importante colocar "if not exists" pois se esse metodo for chamado de novo
        // não vai dar erro 
            const sql = `create table if not exists atendimentos(
                id int auto_increment primary key,
                Data date,
                servico varchar(100),
                cliente varchar(100),
                status enum("ativo","realizado","cancelado") default "ativo")`

        this.conexao.query(sql,(error)=>{
            if(error){
                console.log("Falha ao criar tabela!")
                console.log(error)
                return
            }
            console.log("Tabela criada com sucesso")
        })
    }

}

//vamos exportar uma instancia da classe Tabelas
module.exports = new Tabelas()
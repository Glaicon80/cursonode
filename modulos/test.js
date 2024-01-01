//usamos a função require para carregar um modulo e podemos
//salvar essa função em uma variavel
// utilizamos ./ qdo o arquivo esta dentro da mesma pasta.
//nao precisar colocar a extensao.

let somaFunc = require("./somar")
let subFunc = require("./subtrair")

console.log(somaFunc(1,3))
console.log(subFunc(6,3))


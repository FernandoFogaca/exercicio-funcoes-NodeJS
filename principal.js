

const {encontrarAluno } = require('./alunos.js');

console. log("Iniciou o Sotware");



function  outraFuncao(elementoAtual) 


{

   

}       


const nomeAProcurar = "Robson"
const minhaFuncao = (elementoAtual, voltaAtual) => {
    return elementoAtual == nomeAProcurar
}
const outraFuncao = () => console.log("NAO ACHOU NADA AQUI")

const resultadoNossoFind = nossoFind(
    ["Sabino", "Cicero", "Luciel"],
    minhaFuncao, outraFuncao)

console.log(resultadoNossoFind)

function nossoFind(lista, callBackFunction, outraFuncaoCall) {
    console.log("--- NOSSO FIND ---")

    for (let index = 0; index < lista.length; index++) {
        if (callBackFunction(lista[index], index))
            return lista[index]
    }

    outraFuncaoCall()

    return undefined
}






// Tela -> aplicação -> domínio (regra de negócio)


// Entrada
// const entradaLista = "Jorge,Cicero,Luciel,Sabino"
// const entradaNome = "Cicero"

// Processamento
// encontrarAluno(entradaNome, listaTrabalhada)

// Saída
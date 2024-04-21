function encontrarAluno(nomeAluno, listaAlunos) {

const resultadoFind = listaAlunos.find((aluno) => aluno == nomeAluno);

if (resultadoFind !== undefined)


return "Encontrei"

else

return "Não encontrei"

}


function filtrarAlunos(nomeAluno, listaAlunos) {
    return listaAlunos.filter((aluno) => aluno == nomeAluno);


}

function construirAluno(nome, idade) {


const objetivoAluno = {
nome: nome,
idade : idade

}

return objetivoAluno


}


module.exports = { encontrarAluno, filtrarAlunos, construirAluno }
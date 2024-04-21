// TESTE UNITÁRIO (TESTANDO FUNÇÕES)
// TDD - Teste driven development

const { encontrarAluno, filtrarAlunos, construirAluno } = require("./alunos")

describe("alunos", () => {
    
    describe("encontrarAluno", () => {
        it("deve retornar 'encontrei' quando encontrar um nome da lista", () => {
            const nome = "Sabino"
            const listaAluno = ["Cicero", "Luciel", "Sabino"]

            const resultado = encontrarAluno(nome, listaAluno)
            const resultadoEsperado = "Encontrei"

            expect(resultado).toBe(resultadoEsperado)
        })
        it("deve retornar 'não encontrei' quando não encontrar um nome da lista", () => {
            const nome = "Jorge"
            const listaAluno = ["Cicero", "Luciel", "Sabino"]

            const resultado = encontrarAluno(nome, listaAluno)
            const resultadoEsperado = "Não encontrei"

            expect(resultado).toBe(resultadoEsperado)      
        })
    })

    describe("filtrarAlunos", () => {
        it("deve retornar o nome de um aluno se encontrar um aluno na lista", () => {
            const nome = "Jorge"
            const listaAluno = ["Cicero", "Luciel", "Sabino"]

            const resultado = filtrarAlunos(nome, listaAluno)
            const resultadoEsperado = []

            expect(resultado).toEqual(resultadoEsperado)       
        })
        it("deve retornar o nome de um aluno se encontrar um aluno na lista", () => {
            const nome = "Sabino"
            const listaAluno = ["Cicero", "Luciel", "Sabino"]

            const resultado = filtrarAlunos(nome, listaAluno)
            const resultadoEsperado = ["Sabino"]

            expect(resultado).toEqual(resultadoEsperado)       
        })
        it("deve retornar o nome de dois alunos se encontrar dois aluno na lista", () => {
            const nome = "Sabino"
            const listaAluno = ["Cicero", "Sabino", "Luciel", "Sabino"]

            const resultado = filtrarAlunos(nome, listaAluno)
            const resultadoEsperado = ["Sabino", "Sabino"]

            expect(resultado).toEqual(resultadoEsperado)      
        })
    })

    describe("construirAluno", () => {
        it("deve retornar um objeto de aluno ao receber nome e idade", () => {
            const nome = "Sabino"
            const idade = 31

            const resultado = construirAluno(nome, idade)

            const resultadoEsperado = {
                nome: "Sabino",
                idade: 31
            }

            expect(resultado).toEqual(resultadoEsperado)        
        })
    })
})
const readline = require('readline')
const { adicionar } = require('./adicionar')
const { listarProjetos } = require('./listarProjetos')
const { mudarProjeto } = require('./mudarProjeto')
const { projetoConcluido } = require('./projetoConcluido')
const { excluir } = require('./excluir')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let croche = []
let feito
exibirMenu()

function exibirMenu(){
    console.log(`
    - Menu Onuvelo -
    1. Adicionar projeto
    2. Listar projetos
    3. Mudar projeto
    4. Concluir projetos
    5. Excluir projeto
    6. Sair    
    `)

    rl.question('Escolha uma opção: ', (opcao) => {
        switch(opcao){
            case '1':
                adicionar(rl, croche, exibirMenu)
                break
            case '2':
                listarProjetos(croche, feito)
                exibirMenu()
                break
            case '3':
                mudarProjeto(rl, croche, exibirMenu)
                break
            case '4':
                projetoConcluido(rl, croche, exibirMenu)
                break
            case '5':
                excluir(rl, croche, exibirMenu)
                break
            case '6':
                rl.close()
                break
            default:
                console.log('Opção inválida, tente novamente :)')
                exibirMenu()
        }
    })
}


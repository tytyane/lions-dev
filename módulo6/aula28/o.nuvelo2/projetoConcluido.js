const { listarProjetos } = require("./listarProjetos")

function projetoConcluido(rl, croche, callback){
    listarProjetos(croche)
        rl.question('Digite o número do projeto que deseja marcar como concluído: ', (numero) => {
            if(numero > 0 && numero <= croche.length){
                croche[numero -1].concluido = true
                console.log('Projeto concluído com sucesso!!!')
                callback()
            } else {
                console.log('Número inválido, tente novamente!')
                callback()
            }
        })
}

module.exports = { projetoConcluido }
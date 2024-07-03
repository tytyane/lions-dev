const { listarProjetos } = require('./listarProjetos')

function excluir(rl, croche, callback){
    listarProjetos(croche)
        rl.question('Digite o número do projeto que deseja excluir: ', (numero) => {
            if(numero > 0 && numero <= croche.length){
                croche.splice(numero - 1, 1)
                console.log('Projeto excluido com sucesso!!!')
                callback()
            } else {
                console.log('Número inválido, tente novamente!')
                callback()
            } 
        })
}

module.exports = { excluir }
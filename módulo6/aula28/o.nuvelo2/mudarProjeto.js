const { listarProjetos } = require('./listarProjetos')

function mudarProjeto(rl, croche, callback){
    listarProjetos(croche)
        rl.question('Digite o número do projeto que deseja mudar: ', (numero) => {
            if(numero > 0 && numero <= croche.length){
                rl.question('Digite o novo nome do projeto: ', (nome) => {
                    rl.question('Digite o novo fio/material usado: ', (fio) => {
                        rl.question('Nova data de entrega: ', (data) => {
                            rl.question('Novo preço: ', (preco) => {
                                croche[numero - 1] = {
                                    nome: nome, 
                                    fio: fio,
                                    data: data, 
                                    preco: parseFloat(preco),
                                    concluido: false
                                }
                                console.log('Projeto alterado com sucesso!!!')
                                callback()
                            })                           
                        })                       
                    })
                })
            } else {
                console.log('Número inválido, tente novamente!')
                callback()
            }
        })
    
}

module.exports = { mudarProjeto }
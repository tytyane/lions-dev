function adicionar(rl, croche, callback){
    rl.question('Digite o nome do projeto: ', (nome) => {
        rl.question('Digite o fio/material usado: ', (fio) => {
            rl.question('Data de entrega: ', (data) => {
                rl.question('Preço: ', (preco) => {
                    croche.push({nome: nome, fio: fio, data: data, preco: parseFloat(preco), concluido: false})
                    console.log('Projeto adicionado com sucesso!')
                    callback()
                })               
            })           
        })
    })
}

module.exports = { adicionar }
function listarProjetos(croche){
    if(croche.length == 0){
        console.log('Nenhum projeto cadastrado')
    } else {
        console.log('Lista de projetos: ')
        croche.forEach((croches, index) => {
            if(croches.concluido == false){
                feito = 'Não'
            } else if(croches.concluido == true){
                feito = 'Sim'
            }
            console.log(`${index + 1}. Nome: ${croches.nome}
   Fio/material: ${croches.fio}
   Data de entrega: ${croches.data}
   Preço: R$${croches.preco.toFixed(2)}
   Concluído: ${feito}
   `)
        })
    }
    
}

module.exports = { listarProjetos }
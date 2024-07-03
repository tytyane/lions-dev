let coresFavoritas = ['preto', 'azul', 'verde']
let coresEspeciais = []
let corDoUsuario

console.log('Qual é a sua cor favorita?')
process.stdin.once('data', function (data){
    corDoUsuario = data.toString().trim()
    processamento(corDoUsuario)
    process.exit()
})

function processamento(corDoUsuario){
    if(coresFavoritas.includes(corDoUsuario)){
        console.log('A sua cor favorita é uma das favoritas da turma!')
    } else {
        console.log('A sua cor é diferente e não está entre as favoritas, vamos adicionar à lista!') 
        coresEspeciais.push(corDoUsuario)
    }
     
    console.log(`A turma possui: ${coresFavoritas.length} cores favoritas. São elas: ${coresFavoritas} e sua cor é ${coresEspeciais}`)
}

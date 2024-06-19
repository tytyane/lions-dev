let opcoes = ['Pedra', 'Papel', 'Tesoura']
let escolhaComp = ''
let escolhaUs = ''

console.log('Pedra, papel, ou tesoura?')
process.stdin.once('data', function(data){
    escolhaUs = data.toString().trim()
    jogo(escolhaUs)
    process.exit()
})

function jogo(escolhaUs){
    escolhaComp = opcoes[Math.floor(Math.random() * 3)]
    console.log(`Adversário escolheu: ${escolhaComp}`)
    
    if(escolhaUs == escolhaComp){
        console.log('Empate')
    } else if(escolhaUs == 'Pedra' && escolhaComp == 'Tesoura' || escolhaUs == 'Tesoura' && escolhaComp == 'Papel' || escolhaUs == 'Papel' && escolhaComp == 'Pedra'){
        console.log('Você venceu!')
    } else {
        console.log('Você perdeu!')
    }
}

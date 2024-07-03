let resposta
let gostaDeCafe

console.log("Você gosta de café?")
process.stdin.once('data', function(data){
    resposta = data.toString().trim()
    processamento(resposta)
    process.exit()
})

function processamento(resposta) {
    if (resposta == 'sim' || resposta == 'Sim') {
        gostaDeCafe = true
    } else {
        gostaDeCafe = false
    }
    
    if (gostaDeCafe) {
        console.log("Sério!? Eu acho muito amargo")
    } else {
        console.log("Eu também não gosto")
    }
}
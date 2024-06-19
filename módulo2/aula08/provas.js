let prova1
let prova2
let calculo
let provas = []


console.log("Digite a primeira nota: ")
process.stdin.once('data', function(data){
    prova1 = parseFloat(data.toString().trim())
    console.log("Digite a segunda nota: ")

    process.stdin.once('data', function(data){
        prova2 = parseFloat(data.toString().trim())
        processamento(prova1, prova2)
        process.exit()
    })
})
 
function processamento (prova1, prova2) {
    provas.push(prova1, prova2)
    calculo = (provas[0] + provas[1]) / 2 
    console.log(`A média das notas é: ${calculo}`)
}
let nome 
let idade
let aniversário
let resposta
const ano = 2024

console.log("Qual é seu nome?")
process.stdin.once('data', function(data){
    nome = data.toString().trim()
    console.log("Qual é sua idade?")

    process.stdin.once('data', function(data) {
        idade = parseInt(data.toString().trim())
        console.log("Você já fez aniversário este ano?")

        process.stdin.once('data', function(data){
            aniversário = data.toString().trim()
            processamento(nome, idade, aniversário)
            process.exit()
        })
    })
})

function processamento(nome, idade, aniversário) {
    let diferença = ano - idade
    
    if(aniversário == 'Sim' || aniversário == 'sim'){
        resposta = true
    } else {
        resposta = false
    }
    
    if(resposta){
        console.log(`Oii ${nome}, você nasceu em ${diferença}.`) 
    } else {
        console.log(`Oii ${nome}, como você ainda não fez aniversário, você nasceu em ${--diferença}`)
    }
}
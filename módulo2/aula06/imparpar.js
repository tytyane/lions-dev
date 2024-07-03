let numero

console.log ('Digite um número:')
process.stdin.once('data', function(data){
    numero = parseInt(data.toString().trim())
    processamento(numero)
    process.exit()
})

function processamento(numero) {
    if (numero !== 0 && numero % 2 == 0) {
        console.log("O número é par")
    } else if (numero == 0) {
        console.log("O número é nulo")
    } else {
        console.log("O número é ímpar")
    }}
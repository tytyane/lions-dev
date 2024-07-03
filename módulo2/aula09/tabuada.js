let numero
var tabuada

console.log("Qual tabuada você gostaria de sabe?")
    process.stdin.once('data', function(data){
        numero = parseInt(data.toString().trim())
        processamento(numero)
        process.exit()
})

function processamento(numero){
for (tabuada = 0; tabuada <= 100; tabuada++){
    console.log(`${numero} x ${tabuada} = ${numero*tabuada}`)
}}
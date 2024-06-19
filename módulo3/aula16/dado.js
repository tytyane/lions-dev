let numero 

console.log("Quantos lado tem o dado?")
process.stdin.once('data', function(data){
    numero = parseInt(data.toString().trim())
    dados(numero)
    process.exit()
})

function dados(numero){
    console.log( Math.floor(Math.random() * numero) + 1)
}

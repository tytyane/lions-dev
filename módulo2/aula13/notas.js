let numero
let nota

console.log('Qual foi sua nota?')
process.stdin.once('data', function(data){
    numero = parseFloat(data.toString().trim())
    classificar(numero)
    if(nota == 'A'|| nota == 'B'|| nota == 'C'){
        console.log(`Você foi aprovado com nota: ${nota}`)
    } else if(nota == 'D'|| nota == 'F') {
        console.log(`Você reprovou com nota: ${nota}`)
    }
    process.exit() 
})

function classificar(numero){
    switch(true){
        case (numero >= 90 && numero <= 100):
            nota = 'A'
            break

        case (numero >= 80 && numero <= 89):
            nota = 'B'
            break

        case (numero >= 70 && numero <= 79):
            nota = 'C'
            break

        case (numero >= 60 && numero <= 69):
            nota ='D'
            break

        case (numero >= 0 && numero <= 59):
            nota ='F'
            break

        default:
            console.log("Nota inválida!");
            break
    }
}





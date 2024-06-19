let notas = [8, 6, 4, 9, 7, 2, 10, 8, 3, 1]
let somaNotas = 0
let media = 0
let maiorNota = notas[0]
let menorNota = notas[0]
let notaAcima = []
let notaAbaixo = []

for(i = 0; i < notas.length; i++){
    somaNotas += notas[i]
}
media = somaNotas/notas.length
console.log(`A média das notas é ${media}`)

for(i = 0; i < notas.length; i++){
    if (notas[i] < menorNota) {
        menorNota = notas[i]
    } else if (notas[i] > maiorNota){
        maiorNota = notas[i]
    }
}
console.log(`A nota mais alta é ${maiorNota} e a mais baixa é ${menorNota}`)

for(i = 0; i < notas.length; i++){
    if(notas[i] > media){
        notaAcima++
    }
}
console.log(`Tem ${notaAcima} notas acima da média calculada.`)

notas.push(5)
console.log(`${notas}`)

for(i = 0; i < notas.length; i++){
    if(notas[i] < 8){
        notaAbaixo++
    }
} 
console.log(`Tem ${notaAbaixo} notas abaixo da média 8.`)
let notas = [7.5, 8.0, 6.0, 9.5, 5.0, 8.5, 7.0, 10.0, 6.5, 9.0]
let soma = 0
let media = 0
let notaMaxima = notas[0]
let notaMinima = notas[0]
let notaAcimaMedia = 0
let reprovados = 0

for(let i = 0; i < notas.length; i++){
    soma += notas[i]

    if(notas[i]>notaMaxima){
        notaMaxima = notas[i]
    } else if(notas[i]<notaMinima){
        notaMinima = notas[i]
    }

    if(notas[i]>media){
        notaAcimaMedia++
    }

    if(notas[i]<6){
        reprovados++
    }

}

media = soma/notas.length
notas.push(8.0)
console.log(`A média é: ${media}.`)
console.log(`A nota mais alta é ${notaMaxima} e a nota mais baixa é ${notaMinima}.`)
console.log(`São ${notaAcimaMedia} acima da média.`)
console.log(`A lista atualizada é: ${notas}.`)
console.log(`São ${reprovados} alunos reprovados.`)
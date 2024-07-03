const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

console.log("Bem vindo! Você tem 10 chances para adivinhar o número. Boa sorte!")
let numeroAleatorio = Math.floor(Math.random() * 100) + 1
let rodadas = 0
let max = 9
adivinhe()


function adivinhe(){
    rl.question('Chute um número entre 1 e 100:', (resposta) => {
        if(rodadas < max && resposta > 0 && resposta <= 100){
            switch(true){
                case(resposta < numeroAleatorio):
                    console.log('Muito baixo!')
                    rodadas++
                    adivinhe()
                break
                case(resposta > numeroAleatorio):
                    console.log('Muito alto!') 
                    rodadas++
                    adivinhe()
                break
                case(resposta == numeroAleatorio):
                    console.log('Parabéns, você acertou!')
                    rl.close()
                    console.log(`Você errou ${rodadas} rodadas até acertar`)
                    break
            }  
        } else if(resposta > 100){
            console.log('Número inválido')
            adivinhe()
        } else {
            console.log('Você perdeu!')
            rl.close()
        }
    }) 
}

let caracteres = 'qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM0123456789'
let senha = ''
let comprimentoSenha
let numeroAleatorio

console.log('Quantidade de caracteres da senha:')
process.stdin.once('data', function(data){
    comprimentoSenha = parseInt(data.toString().trim())
    logica(comprimentoSenha)
    process.exit()
})

function logica(comprimentoSenha){
    for(let i = 0; i < comprimentoSenha; i++){
       numeroAleatorio = Math.floor(Math.random() * caracteres.length + 1)
       senha += caracteres.charAt(numeroAleatorio)
    }
    console.log(`Sua senha aleatória é: ${senha}`) 
}

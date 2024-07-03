let nome
console.log('Qual é seu nome?')
process.stdin.on('data', function(data){
    let nome = data.toString();
    let saudacao = "Olá, "
    console.log(saudacao + nome)
})
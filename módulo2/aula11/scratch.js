let nota1
let nota2
let media

console.log('Digite a sua primeira nota:')
    process.stdin.once('data', function(data){
    nota1 = parseFloat(data.toString().trim())
    console.log('Digite a sua segunda nota:')
        process.stdin.once('data', function(data){
        nota2 = parseFloat(data.toString().trim())
        processamento(nota1, nota2)
        process.exit()
        })
    })

    function processamento(nota1, nota2){
        media =(nota1 + nota2)/2
        if(media<8){
            console.log(`Poxa, você está de recuperação, porque tirou ${media}.`)
        } else {
            console.log(`Parebéns, você passou de ano com ${media} de média.`)
        }
    }
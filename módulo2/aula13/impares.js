var numeros = []
var impares = []

for(let i = 1; i < 11; i++){
    numeros.push(i)
    if(i % 2 != 0){
        impares.push(i)
    }
}

console.log(impares)

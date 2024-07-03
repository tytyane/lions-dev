let numeros = [28, 10, 3, 0, 20, 5, 6, 3]
let impar = []
let par = []

numeros.push(18)

for(let i = 0; i < numeros.length; i++){
    if(numeros[i] % 2 != 0){
      impar.push(numeros[i])  
    } else {
        par.push(numeros[i])
    }
}

console.log(impar)
console.log(par)

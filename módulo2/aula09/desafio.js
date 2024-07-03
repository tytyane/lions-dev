let somaPares = 0 
let somaImpares = 0 
let totalPares = 0
let totalImpares = 0

for(let n = 0; n <= 999; n++){
    if(n % 2 == 0){
        totalPares++
        somaPares += n
    } else {
        totalImpares++
        somaImpares += n
    }
} 

    console.log(`O total de números pares é: ${totalPares}`)
    console.log(`O total de ímpares é: ${totalImpares}`)
    console.log(`A soma dos números pares é: ${somaPares}`)
    console.log(`A soma dos ímpares é: ${somaImpares}`)
    console.log(`A média dos números pares é: ${somaPares/totalPares}`)
    console.log(`A média dos ímpares é: ${somaImpares/totalImpares} `)

if(totalPares>totalImpares){
    console.log(`O total de números pares é maior que o de números ímpares`)
} else if(totalPares<totalImpares){
    console.log(`O total de números ímpares é maior que o de pares`)
} else {
    console.log(`O total de números pares e ímpares é igual`)
} 
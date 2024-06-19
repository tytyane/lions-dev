function calculadora(a, b, operador){
    switch(operador){
        case '+':
            console.log(a+b)
            break
        case '-':
            console.log(a-b)
            break
        case '*':
            console.log(a*b)
            break
        case '/':
            console.log(a/b)
            break
        default :
            console.log('Operação inválida') 
            break
    }
}

calculadora(5, 3, '/')

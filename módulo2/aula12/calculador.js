function calculadora(a, b, operacao) {
   if (operacao == '+'){
    return a + b
   } else if(operacao == '-'){
    return a - b
   } else if(operacao == '*'){
    return a * b
   } else if(operacao == '/'){
    return a / b
   } else {
      return 'Operação inválida'
   }
}
 
console.log(calculadora(5, 4, '/'))
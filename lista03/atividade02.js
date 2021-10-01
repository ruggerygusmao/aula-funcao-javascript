/*2)      Criar uma função que receba um array com 5 números como parâmetros:
a)       Inverter o array e retornar o resultado.
b)      Chamar a função e exibir o resultado no console. */

var inverteArray = (numero)=>{
    return numero.reverse();;
}

var num = [1,2,3,4,5];
console.log(inverteArray(num));
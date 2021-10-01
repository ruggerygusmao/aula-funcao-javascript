/*1)      Criar uma função para receber dois parâmetros: numero e percentual.
a)       Calcular a porcentagem de um número  usando a fórmula:
b)       Chamar a função e exibir o resultado no console.
 */

function calcularPorcentagem(numero,percentual){
    let result = (numero/100)*percentual;
    return "Total: "+result;
}

console.log(calcularPorcentagem(200,10));
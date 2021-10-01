/*3)      Criar uma função que receba 4 números inteiros positivos como parâmetros:
a)       Calcular a soma de todos os números.
b)      Retornar o Resultado.
c)       Chamar a função e exibir o resultado no console. */

var calcularSoma = (n1,n2,n3,n4)=>{
    if((n1>=0) && (n2>=0) && (n3>=0) && (n4>=0) ){
    return (n1+n2+n3+n4);
    }else{
        return "Numeros positivos";
    }
}

console.log(calcularSoma(2,2,2,2));
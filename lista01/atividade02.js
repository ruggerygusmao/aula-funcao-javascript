/*2)      Criar uma função que recebe duas strings:
a)       Transformar todas as letras em maiúsculas do primeiro parâmetro usando toUpperCase().
b)      Concatenar as duas strings e retornar o resultado.
c)       Chamar a função e exibir no console o resultado.
 */

function converterString(str1,str2){
    str1 = str1.toUpperCase();

    return str1 + str2;
}

console.log(converterString("Olá ","Mundo!"));
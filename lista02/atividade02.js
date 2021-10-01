/*2)      Criar uma função que recebe dois arrays como parâmetro e juntar os arrays:
a)       Converter o array para string e retornar o resultado.
b)      Chamar a função e exibir o resultado no console.
 */

function unirArrays(array1,array2){
    let unir = array1.concat(array2);

    return unir.join("-");
}

vetor1 = [1,2,3];
vetor2 = [4,5,6];

console.log(unirArrays(vetor1,vetor2));
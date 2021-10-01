/*)      Criar uma função que retorne 17 vezes a palavra Repetição.
a)       Chamar a função e exibir no console o resultado. */

function repetirPalavra(){
    for(var i = 0; i < 17; i++){
        console.log("Repetição");
    }
    return "fim";
}

console.log(repetirPalavra());
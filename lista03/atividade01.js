/*1)      Criar uma função para receber  uma string como parâmetro:
a)       Contar a quantidade de palavras repetidas em uma frase e retornar o total.
b)      Chamar a função e exibir o resultado no console. */


var contarRepeticoes = (string,stringRepetida)=>{
    let cont = 0;
    let array = string.split(" ");
    for(var i=0; i < array.length;i++){ 
        if(array[i]== stringRepetida){
            cont +=1;
        } 
     }
    return "Total de repetições: "+cont;
}

console.log(contarRepeticoes("Oi meu nome é ruggery e me chama ruggery","ruggery"));
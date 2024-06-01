/*Escreva uma função que receba dois parâmetros. O primeiro é o elemento que repetirá, enquanto que o segundo será o número de vezes que haverá repetição.
Uma array será retornado*/

function repetir (item, quantidade) {
    let resultado = [];

    for (let i = 0; i < quantidade; i++) {
        resultado.push(item);
    }

    return resultado;
}

console.log(repetir("código", 2));
console.log(repetir(7,3));
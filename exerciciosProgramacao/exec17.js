/*Escreva uma função que receba um array de números e retornará a soma de todos os números desse array*/

function somarNumeros(numeros) {
    let soma = 0;
    for (let i = 0; i < numeros.length; i++) {
        soma += numeros[i];
    }

    return soma;
}

console.log(somarNumeros([10, 10, 10]));
console.log(somarNumeros([15, 15, 15, 15]));


/*
function somarNumeros(numeros) {
const quantidadeDeNumeros = numeros.length
return (quantidadeDeNumeros === 0) ? 0 : numeros[0] + somarNumeros(numeros.slice(1))
}

function somarNumeros(numeros) {
let soma = 0
numeros.forEach(numero => soma += numero)
return soma
}

 */
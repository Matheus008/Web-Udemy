/*Elabore uma função que recebe dois parâmetro: o primeiro é uma array de números e o segundo é um número que especifica uma quantidade de dígitos. Essa função 
deverá retornar somente aqueles números do array que têm a quantidade de dígitos indicada pelo segundo parâmetro*/

function filtrarPorQuantidadeDeDigitos(numeros, quantidadeDesejada) {
    let resultado = [];

    for (numero of numeros) {
        const quantidadeDeDigitos = String(numero).length
        if (quantidadeDeDigitos === quantidadeDesejada)
            resultado.push(numero)
    }
    return resultado
}

console.log(filtrarPorQuantidadeDeDigitos([38, 2, 365, 10, 125, 11], 2));

/*
function filtrarPorQuantidadeDeDigitos(numeros, quantidadeDesejada) {
return numeros.filter(numero => {
const quantidadeDeDigitos = String(numero).length
return quantidadeDeDigitos === quantidadeDesejada
})
}
*/

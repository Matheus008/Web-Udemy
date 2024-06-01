/*31) Escrever um algoritmo que percorre um vetor de inteiros, conta quantos números negativos há nesse vetor
e imprime a quantidade no console.*/

function numerosNegativos(numeros) {
    let qtdNumerosNegativos = 0;
    for (var i = 0; i < numeros.length; i++) {
        if(numeros[i] < 0) {
            qtdNumerosNegativos += 1;
        }
    }
    return qtdNumerosNegativos;
}

numeros = [10, 5, -7, 3, -1, 3, -11, -20, 6, 9];
console.log(numerosNegativos(numeros));
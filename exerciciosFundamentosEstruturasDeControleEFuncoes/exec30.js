/*30) Escreva um algoritmo que percorre um vetor de inteiros e defina o maior e menor valor dentro do vetor.*/

function vetorInteiros(numeros) {
    let maiorNumero;
    let menorNumero;
    for (let i = 0; i < numeros.length; i++) {
        if (maiorNumero === undefined && menorNumero === undefined) {
            maiorNumero = numeros[i];
            menorNumero = numeros[i];
        } else {
            if (numeros[i] > maiorNumero) {
                maiorNumero = numeros[i];
            }
            if (numeros[i] < menorNumero) {
                menorNumero = numeros[i];
            }
        }
    }
    console.log("Maior número: " + maiorNumero + " menor número: " + menorNumero);
}

numeros = [10, 5, 7, 3, 1, 3, 11, 20, 6, 9];

console.log(vetorInteiros(numeros));
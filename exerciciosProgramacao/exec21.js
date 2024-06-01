/*Criar uma função que receba um array de números e retorne o menor número desse array*/

function menorNumero(numeros) {
    let menorNumero = numeros[0];

    for (let i = 0; i < numeros.length; i++) {
        if (menorNumero > numeros[i]) {
            menorNumero = numeros[i];
        }
    }

    return menorNumero;
}

console.log(menorNumero([10, 5, 35, 65]));


/*
function menorNumero(numeros) {
return numeros.reduce((anterior, atual) => anterior < atual ? anterior : atual)
}

function menorNumero(numeros) {
return Math.min(...numeros);
}
*/
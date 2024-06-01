/*28) Ler um vetor de números inteiros e imprimir quantos são pares e quantos são ímpares.*/

function numerosParesEImpares(numeros) {
    let numerosPares = 0;
    let numerosImpares = 0;
    for (var i = 0; i < numeros.length; i++){
        if(numeros[i] % 2 == 0){
            numerosPares++;
        }else{
            numerosImpares++;
        }
    }

    console.log("Qtd de numeros Pares: " + numerosPares + " Qtd de numeros Impares: " + numerosImpares);
}

numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
numerosParesEImpares(numeros);
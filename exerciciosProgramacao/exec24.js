/*Desenvolva uma função que recebe um caractere e uma String como parâmetros e retorne a quantidade de vezes que o caractere se repete na String. A função deverá
ser case-sensitive, ou seja, irá diferenciar maiúsculas e minúsculas*/

function contarCaractere(caractereBuscado, frase) {
    let contador = 0
    for (let i = 0; i < frase.length; i++)
        if (frase.charAt(i) === caractereBuscado)
            contador++;
    return contador;
}

console.log(contarCaractere("r", "A sorte favorece os audazes"));
console.log(contarCaractere("c", "Conhece-te a ti mesmo"));


/*
function contarCaractere(caractereBuscado, frase) {
return [...frase].filter(caractere => caractere === caractereBuscado).length
}
*/
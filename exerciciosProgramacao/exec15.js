/*Elabore uma função que receba um array de números e retorne um array que tenha todos os números que são pares e que também tenham índices pares*/

function receberSomenteOsParesDeIndicesPares(numeros) {
    const numerosPares = [];
    for (let i = 0; i < numeros.length; i++) {
        if(numeros[i] % 2 === 0 && i % 2 === 0) {
            numerosPares.push(numeros[i]);
        }
    }

    return numerosPares;
}

console.log(receberSomenteOsParesDeIndicesPares([1,2,3,4]));
console.log(receberSomenteOsParesDeIndicesPares([10,70,22,43]));


/*
function receberSomenteOsParesDeIndicesPares(numeros) {
let resultado = []
for(let i = 0; i < numeros.length; i += 2){
const numeroPar = numeros[i] % 2 === 0
if(numeroPar)
resultado.push(numeros[i])
}
return resultado
}

function receberSomenteOsParesDeIndicesPares(numeros) {
return numeros.filter((numero, indice) => {
const numeroPar = numero % 2 === 0
const indicePar = indice % 2 === 0
return numeroPar && indicePar
})
}



*/
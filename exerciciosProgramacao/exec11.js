/*Crie uma função que receba uma array e retorne o primeiro e o último elemento desse array como um novo array:*/

function receberPrimeiroEUltimoElemento(elementos) {
    const indiceDoPrimeroElemento = 0;
    const indiceDoUltimoElemento = elementos.length -1;
    const primeitoElemento = elementos[indiceDoPrimeroElemento];
    const ultimoElemento = elementos[indiceDoUltimoElemento];

    return [primeitoElemento, ultimoElemento];
}

console.log(receberPrimeiroEUltimoElemento([7,14,"Olá"]));
console.log(receberPrimeiroEUltimoElemento([-100, "aplicativo", 16]));
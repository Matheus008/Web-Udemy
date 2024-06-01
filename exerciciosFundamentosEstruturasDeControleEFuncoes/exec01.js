//01) Crie uma função que dado dois valores (passados como parâmetros) mostre no console a soma, subtração,
//multiplicação e divisão desses valores.

function matematica(numero1, numero2) {
    let soma = numero1 + numero2;
    let subtração = numero1 - numero2;
    let divisão = numero1 / numero2;
    let multiplicação = numero1 * numero2;

    return console.log(`Soma: ${soma}, subtração: ${subtração}, multiplicação: ${multiplicação}, divisão: ${divisão}`);
}


matematica(2, 2);
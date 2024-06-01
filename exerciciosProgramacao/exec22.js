/*Desenvolva uma função que receba como parâmetro um número de 1 a 10. Internamente, na função, será gerado um número aleatório de 1 a 10. A função deverá retornar se
o parâmetro de entrada foi igual ao número sorteado internamente.Se o valor fornecido foi sorteado, retorne "Parabéns! O número sorteado foi o X". Se não for igual
retorne "Que pena!O número sorteado foi o X".X é o número que foi sorteado*/

function funcaoDaSorte(numeroDaSorte) {
    const min = 1;
    const max = 10;
    const numeroAleatorio = Math.floor(Math.random() * (max - min + 1) + min);

    return (numeroDaSorte === numeroAleatorio ?
        `Parabéns! O número sorteado foi ${numeroAleatorio}` :
        `Que pena, o número sorteado foi ${numeroAleatorio}`
        )
}

console.log(funcaoDaSorte(10));
console.log(funcaoDaSorte(5));
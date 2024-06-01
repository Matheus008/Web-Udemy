/*Escreva uma funçãoque receba a idade de uma pessoa em anos e retorne a mesma idade em dias*/

function converterIdadeParaDias(idade) {
    const ano = 365;
    return idade * ano;
}

console.log(converterIdadeParaDias(25));
console.log(converterIdadeParaDias(70));
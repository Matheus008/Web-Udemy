/*A fim de manter o calendário anual ajustado com o movimento de translação da Terra, criou-se os anos bissextos, que têm 366 dias em vez dos 365 presentes nos anos normais
Para determinar se um ano é bissexto, é necessário saber se ele é multiplo de 4. Não pode ser multiplo de 100, exceto se for também múltiplo de 400*/

function checarAnoBissexto(ano) {
    const divisivelPorQuatro = ano % 4 == 0;
    const divisivelPorCem = ano % 100 == 0;
    const divisivelPorQuatrocentos = ano % 400 == 0;
    return (divisivelPorQuatro && !divisivelPorCem) || divisivelPorQuatrocentos;
}

console.log(checarAnoBissexto(2020));
console.log(checarAnoBissexto(2100));

/*
// checa-se indiretamente, verificando se o mês de fevereiro do dado ano tem 29 dias
function checarAnoBissexto(ano) {
return new Date(ano, 1, 29).getDate() === 29;
}

*/
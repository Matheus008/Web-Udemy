/*Desenvolva uma função que recebe dois parâmetros, um é a quantidade de horas trabalhadas por um funcionário num mês, e o quanto ele recebe por hora.
O retorno da função deve ser a String "Salário igual a R$X", em que X é o quanto o funcionário ganhou por mês*/

function calcularSalario(horaTrabalhadaPorMes, valorHoraTrabalhada) {
    return `Salário igual a R$${valorHoraTrabalhada * horaTrabalhadaPorMes}`
}

console.log(calcularSalario(150, 40.5));
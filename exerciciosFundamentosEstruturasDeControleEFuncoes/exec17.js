/*17) Um funcionário irá receber um aumento de acordo com o seu plano de
trabalho, de acordo com a tabela abaixo:
Plano Aumento
A 10%
B 15%
C 20%
Faça uma função que leia o plano de trabalho e o salário atual de um funcionário e calcula e imprime o seu
novo salário. Use a estrutura switch e faça um caso default que indique que o plano é inválido.*/ 

function aumentoSalario(plano, salarioAtual) {
    let planoA = 0.10;
    let planoB = 0.15;
    let planoC = 0.20;

    switch(plano) {
        case "A": return salarioAtual + (planoA * salarioAtual);
        break;
        case "B": return salarioAtual + (planoB * salarioAtual);
        break;
        case "C": return salarioAtual + (planoC *salarioAtual);
        break;
        default: return "Plano inválido!!";
        break;
    }
}

console.log(aumentoSalario('A', 1000));
console.log(aumentoSalario('B', 1000));
console.log(aumentoSalario('C', 1000));
console.log(aumentoSalario('D', 1000));

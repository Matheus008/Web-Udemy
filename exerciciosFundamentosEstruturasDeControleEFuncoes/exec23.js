/*23) Escreva um algoritmo que leia o código de um aluno e suas três notas. Calcule a média ponderada do
aluno, considerando que o peso para a maior nota seja 4 e para as duas restantes, 3. Mostre o código do
aluno, suas três notas, a média calculada e uma mensagem "APROVADO" se a média for maior ou igual a 5 e
"REPROVADO" se a média for menor que 5. Repita a operação até que o código lido seja negativo.
*/

function escola(codigo, nota1, nota2, nota3) {
    //while (codigo <= 0) {

        let total = (nota1*4 + nota2*3 + nota3*3) / 10;
        
        if (total >= 5){
            return `Código: ${codigo}, Nota 1: ${nota1}, Nota 2: ${nota2}, Nota 3: ${nota3}, Total: ${total}, Situação: APROVADO`;
        }else{
            return `Código: ${codigo}, Nota 1: ${nota1}, Nota 2: ${nota2}, Nota 3: ${nota3}, Total: ${total}, Situação: REPROVADO`;
        }
   // }
}

console.log(escola(123, 2.8, 6, 3.5));

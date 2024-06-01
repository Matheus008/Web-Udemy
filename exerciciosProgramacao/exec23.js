/*Criar uma função que receba uma String como parâmetro e conte quantas palavras tem nela*/

function contarPalavras(frase) {
    const palavras = frase.split(" ");

    return palavras.length;
}

console.log(contarPalavras("Sou uma frase"));
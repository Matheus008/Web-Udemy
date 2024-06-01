/*A fim de criar um mecanismo de busca para sua aplicação, você precisa iniciar criando uma função para identificar palavras semelhantes. Escreva uma função que receba
como primeiro parâmetro uma palavra e, como segundo parâmetro, um array de String. A função deverá filtrar as palavras do array que contêm nelas a String do primeiro
parâmetro*/

function buscarPalavrasSemelhantes(inicio, palavras) {
    let semelhantes = [];
    for (let palavra of palavras)  
        if(palavra.includes(inicio))
        semelhantes.push(palavra);
    
    return semelhantes;
}

console.log(buscarPalavrasSemelhantes("pro", ["programação", "mobile", "profissão"]));


/*
function buscarPalavrasSemelhantes(inicio, palavras) {
return palavras.filter(palavra => palavra.includes(inicio))
}
*/
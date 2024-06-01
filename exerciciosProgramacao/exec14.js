/*Desenvolva uma função que receba como parâmetro um objeto e retorne um array de array, em que cada elemento é um array formado pelos pares chave/valor que 
corresponde a um atributo do objeto.*/

function objetoParaArray(objeto) {
    const resultado = [];
    for (let chave in objeto)
    resultado.push([ chave , objeto[chave] ])
    return resultado
    }

/*
function objetoParaArray(objeto) {
const chaves = Object.keys(objeto)
const resultado = chaves.map( chave => [chave, objeto[chave]] )
return resultado
}

function objetoParaArray(objeto) {
return Object.entries(objeto)
}    
    */
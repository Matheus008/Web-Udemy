//04) Crie uma função que irá receber dois valores, o dividendo e o divisor. A função deverá imprimir o resultado
//e o resto da divisão destes dois valores

function divisao(dividendo, divisor) {
    let resultado = Math.floor (dividendo / divisor);
    let resto = dividendo % divisor;

    return console.log(`Resultado: ${resultado}, Resto: ${resto}`);
}

divisao(11, 4);
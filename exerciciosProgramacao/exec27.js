/*Desenvolva uma função que recebe um objeto como parâmetro e retorne um outro objeto que corresponde ao objeto recebido como parâmetro, porém com as posições das 
chaves e valores invertidas, conforme exemplo a seguir:*/

function inverter(objeto) {
    const objetoInvertido = {}
    Object.entries(objeto).forEach(parChaveValor => {
        const chave = 0,
            valor = 1
        objetoInvertido[parChaveValor[valor]] = parChaveValor[chave];
    })
    return objetoInvertido;
}

console.log(inverter({ a: 1, b: 2, c: 3}));



/*
function inverter(objeto) {
const paresDeChaveValorInvertidos = Object.entries(objeto)
.map( parChaveValor => parChaveValor.reverse() )
return Object.fromEntries(paresDeChaveValorInvertidos)
}
*/
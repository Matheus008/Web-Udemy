//06) Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
//primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
//retornará o valor da aplicação sob o regime de juros compostos.

function jurosSimples(capitalInicial, taxa, tempo) {
    let simplesJuros = capitalInicial + (capitalInicial * tempo * taxa);
    return simplesJuros;
}

function jurosCompostos(capitalInicial, taxa, tempo) {
    let compostosJuros = capitalInicial * (1 + taxa) ** tempo;
    return compostosJuros;
}

console.log(jurosSimples(100, 10/100, 2));
console.log(jurosCompostos(100, 10/100, 2));
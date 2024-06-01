/*Crie uma função que recebe um array de elementos e retorne um array somente com números presentes no array recebido como parâmetro*/

function filtarNumeros(array) {
    let filtro = [];

    for (let i = 0; i < array.length; i++) {

        if(typeof array[i] == "number") {
            filtro.push(array[i]);
        }
    }

    //return array.filter(item => typerof item === "number");
    return filtro;
}

console.log(filtarNumeros(["Javascript", 1, "3", "Web", 20]));
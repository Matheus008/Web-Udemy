/*19) O cardápio de uma lanchonete é o seguinte:
Código Descrição do Produto Preço
100 Cachorro Quente R$ 3,00
200 Hambúrguer Simples R$ 4,00
300 Cheeseburguer R$ 5,50
400 Bauru R$ 7,50
500 Refrigerante R$ 3,50
600 Suco R$ 2,80
Implemente uma função que receba como parâmetros o código do item pedido, a quantidade e calcule o valor
a ser pago por aquele lanche. Considere que a cada execução somente será calculado um item. Use o
comando switch. Crie um caso default para produto não existente.*/

function restaurant(codigo, quantidade) {
    switch (codigo) {
        case 100: console.log("Item pedido: Cachorro Quente, Quantidade: " + quantidade + ", Valor Total: R$ " + (3.00 * quantidade)); break;
        case 200: console.log("Item pedido: Hambúrguer Simples, Quatidade: " + quantidade + ", Valor Total: R$ " + (4.00 * quantidade)); break;
        case 300: console.log("Item pedido: Cheeseburguer, Quatidade: " + quantidade + ", Valor Total: R$ " + (5.50 * quantidade)); break;
        case 400: console.log("Item pedido: Bauru, Quatidade: " + quantidade + ", Valor Total: R$ " + (7.50 * quantidade)); break;
        case 500: console.log("Item pedido: Refrigerante, Quatidade: " + quantidade + ", Valor Total: R$ " + (3.50 * quantidade)); break;
        case 600: console.log("Item pedido: Suco, Quatidade: " + quantidade + ", Valor Total: R$ " + (2.80 * quantidade)); break;
        default: console.log("Código Inválido!!!"); break;
    }
}


restaurant(100, 2);
restaurant(200, 2);
restaurant(300, 2);
restaurant(400, 2);
restaurant(500, 2);
restaurant(600, 2);
restaurant(700, 2);
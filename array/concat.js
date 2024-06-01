const filhas = ['Ualeskah', 'Cibalena'];
const filhos = ['Uoxiton', 'Uesclei'];
const todos = filhas.concat(filhos);
const todos2 = filhos.concat(filhos, 'Fulano');
console.log(todos);
console.log(todos2);

console.log([].concat([1, 2], [3, 4], 5, [[6, 7]]));
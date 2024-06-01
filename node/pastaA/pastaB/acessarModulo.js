const modulaA = require('../../moduloA');
console.log(modulaA.ola);
const moduloB = require('../../moduloB');

const saudacao = require('saudacao');
console.log(saudacao.ola);

const c = require('./pastaC');
console.log(c.ola2);

/*const http = require('http');
http.createServer((req, res) => {
    res.write('Bom dia');
    res.end();
}).listen(8080);*/
function tratarErroELancar(erro) { 
    throw new Error('...')
}

function imprimirNomeGritado(obj){
    try{
        console.log(obj.name.toLowerCase() + "!!!");
    }catch(e){
        tratarErroELancar(e);
    } finally{
        console.log('Final');
    }    
}

const obj = {nome: 'Roberto'};
imprimirNomeGritado(obj);
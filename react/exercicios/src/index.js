import React from 'react';
import ReactDOM from 'react-dom';

import Primeiro from './componentes/Primeiro';
import BomDia from './componentes/BomDia';

//import { BoaTarde, BoaNoite } from './componentes/Multiplos'; 
//import BoaTarde, {BoaNoite } from './componentes/Multiplos'; 
//import Mult from './componentes/Multiplos'; 
//import Saudacao from './componentes/Saudacao';
import Pai from './componentes/Pai';
import Filho from './componentes/Filho';

ReactDOM.render(
    <div>
        <Pai nome="Paulo" sobrenome="Souza">
            {/* */}
            <Filho nome="Pedro" sobrenome="Silva"/>
            <Filho nome="Paulo" />
            <Filho nome="Carla" />
        </Pai>
        
    </div> , document.getElementById('root')
)
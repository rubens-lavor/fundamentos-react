import React from 'react';

import Primeiro from './components/basicos/Primeiro';
import ComParametro from './components/basicos/ComParametro';
import Fragmento from './components/basicos/Fragmento';
import Aleatorio from './components/basicos/Aleatorio';

export default function App(props) {
    return (
        <div id="app">

            <h1>Fundamentos React</h1>

            <Aleatorio max={7} min={1} /> 
            {/*gera números de 1 a 6*/}

            <Fragmento />

            <ComParametro
                titulo="Situação do Aluno"
                aluno="Pedro Silva"
                nota={9.3}
            />

            <Primeiro />

        </div>
    );
}
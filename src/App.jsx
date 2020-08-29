import React from 'react';
import "./App.css"

import Primeiro from './components/basicos/Primeiro';
import ComParametro from './components/basicos/ComParametro';
import Fragmento from './components/basicos/Fragmento';
import Aleatorio from './components/basicos/Aleatorio';
import Card from "./components/layout/Card"

export default function App(props) {
    return (
        <div className="App">

            <h1>Fundamentos React</h1>

            <div className="Cards">



                <Card titulo="#04 - Desafio Aleatório">

                    <Aleatorio max={7} min={1} />

                </Card>

                <Card titulo="#03 - Fragmento">

                    <Fragmento />

                </Card>

                <Card titulo="#02 - Com Parâmentro">

                    <ComParametro
                        titulo="Situação do Aluno"
                        aluno="Pedro Silva"
                        nota={9.3}
                    />

                </Card>


                <Card titulo="#01 - Primeiro Exemplo">
                    <Primeiro />
                </Card>

            </div>

        </div>
    );
}
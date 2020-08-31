import React from 'react';
import "./App.css"

import Primeiro from './components/basicos/Primeiro';
import ComParametro from './components/basicos/ComParametro';
import Fragmento from './components/basicos/Fragmento';
import Aleatorio from './components/basicos/Aleatorio';
import Familia from "./components/basicos/Familia";
import FamiliaMembro from "./components/basicos/FamiliaMembro";
import ListaAlunos from "./components/repeticao/ListaAlunos";
import TabelaProdutos from "./components/repeticao/TabelaProdutos";
import ParOuImpar from "./components/condicional/ParOuImpar";



import Card from "./components/layout/Card"
import UsuarioInfo from './components/condicional/UsuarioInfo';
import DiretaPai from './components/comunicação/DiretaPai';
import IndiretaPai from './components/comunicação/IndiretaPai';
import Input from './components/formulario/Input';

export default function App(props) {
    return (
        <div className="App">

            <h1>Fundamentos React</h1>

            <div className="Cards">

                <Card titulo="#11 - Componente Controlado (Input)" color="#2B9DF9">

                    <Input />

                </Card>

                <Card titulo="#10 - Comunicação Inireta" color="#8BAD39">

                    <IndiretaPai />

                </Card>

                <Card titulo="#09 - Comunicação Direta" color="#59323C">

                    <DiretaPai />

                </Card>

                <Card titulo="#08 - Renderização Condicional" color="#982395">

                    <ParOuImpar numero={20} />
                    <UsuarioInfo usuario={{ nome: "Fernando" }} />
                    {/*<UsuarioInfo usuario={{email:"Fernando"}} />
                    <UsuarioInfo usuario={{nome:""}} />
                    <UsuarioInfo />*/}
                </Card>

                <Card titulo="#07 - Repetição Produtos" color="#FF432E">

                    <TabelaProdutos />

                </Card>

                <Card titulo="#06 - Repetição Alunos" color="#FF4C65">

                    <ListaAlunos />

                </Card>

                <Card titulo="#05 - Componente com filhos" color="#588C73">

                    <Familia sobrenome="Lima">

                        <FamiliaMembro nome="Pedro" />
                        <FamiliaMembro nome="Ana" />
                        <FamiliaMembro nome="Gustavo" />

                    </Familia>


                </Card>

                <Card titulo="#04 - Desafio Aleatório" color="#FA6900">

                    <Aleatorio max={7} min={1} />

                </Card>

                <Card titulo="#03 - Fragmento" color="#E94C6F">

                    <Fragmento />

                </Card>

                <Card titulo="#02 - Com Parâmentro" color="#1FDA9A ">

                    <ComParametro
                        titulo="Situação do Aluno"
                        aluno="Pedro Silva"
                        nota={9.3}
                    />

                </Card>


                <Card titulo="#01 - Primeiro Exemplo" color="#F0A830">
                    <Primeiro />
                </Card>

            </div>

        </div>
    );
}
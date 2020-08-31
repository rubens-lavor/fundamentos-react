import React, { useState } from "react";
import IndiretaFilho from "./IndiretaFilho";


export default (props) => {

    const [nome, setNome] = useState("?");
    const [idade, setIdade] = useState("?");
    const [nome, setNome] = useState("?");
    // nome idade nerd

    function fornecerInformacoes(nome, idade, nerd) {
        console.log(nome, idade, nerd)
    }

    return (
        <div>
            <div>Pai</div>
            <IndiretaFilho quandoClicar={fornecerInformacoes}></IndiretaFilho>
        </div>
    )
}
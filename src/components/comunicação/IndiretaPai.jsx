import React from "react";
import IndiretaFilho from "./IndiretaFilho";


export default (props) => {

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
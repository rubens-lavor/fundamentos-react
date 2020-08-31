import React from "react";


export default (props) => {
    const max = 70;
    const min = 50;
    const gerarIdade =()=> parseInt(Math.random()*(max - min)) + min;
    const geraNerd = ()=> Math.random() > 0.5;
    return (
        <div>
            <div>Filho</div>
            <button onClick={(ev) => { props.quandoClicar( "João", gerarIdade(), geraNerd() )}}>
                Fornecer Informações
            </button>
        </div>
    )
}
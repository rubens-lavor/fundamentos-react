import React from 'react';

export default function ComParametro(props) {
    const resultado = props.nota > 6 ? "Aprovado" : "Em recuperação"
    return (
        <div>
            <h2>{props.titulo}</h2>
            <h3>{props.aluno}</h3>
            tem nota <strong> {props.nota} </strong> 
            e está {resultado}
        </div>
    )
}
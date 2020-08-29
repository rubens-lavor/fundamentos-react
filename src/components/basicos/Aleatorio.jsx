import React from "react";

export default (props) => {
    const numero = parseInt(Math.random() * (props.max - props.min) + props.min)

    return (
        <div>
            <h3>Valor Máximo {props.max - 1}</h3>
            <h3>Valor Mínimo {props.min}</h3>
            <h3>Numero Escolhido = {numero}</h3>
        </div>
    )
}
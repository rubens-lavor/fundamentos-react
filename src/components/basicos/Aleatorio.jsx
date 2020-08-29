import React from "react";

export default (props) => {
    const numero = parseInt(Math.random() * (props.max - props.min) + props.min)

    return (
        <h3>Numero aleatório de 1 a 6 = {numero}</h3>
    )
}
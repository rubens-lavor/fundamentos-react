import React from "react";

export default (props) => {

    return (
        <div>
            <div>{props.nome}</div>
            <div>{props.idade}</div>
            <div>{props.nerd ? "É nerd" : "Não é nerd"}</div>
        </div>
    )
}
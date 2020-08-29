import React from "react";
import "./Card.css";

export default (props) => {


    return (
        <div className="Card" style={{
            backgroundColor: props.color || "#F00",
            borderColor: props.color || "#F00"
        }}>
            <div className="Title">{props.titulo}</div>
            <div className="Content">
                {props.children}
            </div>
        </div>
    )
}
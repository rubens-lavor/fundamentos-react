import React, { cloneElement } from "react";
//import FamiliaMembro from "./FamiliaMembro"

export default (props) => {

    return (
        <div>
            {
                props.children.map((child, indice) => {
                    return cloneElement(child, { ...props, key: indice})
                })
            }
        </div>
    )
}
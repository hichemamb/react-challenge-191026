import React from "react";
import "./ButtonBack.scss";

const ButtonBack = ({label="retour"}) => {
    return (
        <button>
            {label}
        </button>
    )
}
export default ButtonBack;
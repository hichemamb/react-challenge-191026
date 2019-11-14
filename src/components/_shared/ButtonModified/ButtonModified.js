import React from 'react'
import img from "../../../assets/img/edit.svg";
import "./ButtonModified.scss";

const ButtonModified = ({ onClick }) => {
    return (
        <button className="buttonmodified" onClick={onClick}>Modifier <img src={img} /></button>
    )
}

export default ButtonModified;
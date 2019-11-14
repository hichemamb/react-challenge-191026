import React from 'react';
import "./Picture.scss";
import img from "../../../assets/img/hetic-logo.png"
const Picture = ({ src="", alt = "picture", width = 100, height = 100 }) => {
    const style = { width, height }
    const img = src === "" ? require("../../../assets/img/default-user.svg") : src;
    return (
        <div className="picture" style={{...style}}>
            <div className="picture-container">
                <img src={img} alt={alt} />
            </div>
        </div>
    )
}

export default Picture;
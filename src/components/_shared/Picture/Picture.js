import React from 'react';
import "./Picture.scss";

const Picture = ({ src, alt = "picture", width = 100, height = 100 }) => {
    const style = { width, height }
    return (
        <div className="picture" style={{...style}}>
            <div className="picture-container">
                <img src={src} alt={alt} />
            </div>
        </div>
    )
}

export default Picture;
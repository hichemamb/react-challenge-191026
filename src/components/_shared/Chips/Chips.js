import React from 'react'
import "./Chips.scss";

export default ({name="inconnu"}) => {
    return (
        <div className="chips">
            {name}
        </div>
    )
}

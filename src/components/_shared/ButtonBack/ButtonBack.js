import React from "react";
import "./ButtonBack.scss";
import {Link} from 'react-router-dom';

const ButtonBack = ({label="retour", to="/students-list"}) => {
    return (
        <Link className="buttonback" to={to}>
            {label}
        </Link>
    )
}
export default ButtonBack;
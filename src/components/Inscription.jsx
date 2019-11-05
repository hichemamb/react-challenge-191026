import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {login} from '../action';

const Inscription = () => {
    const logged = useSelector(state => state.logged );
    const dispatch = useDispatch();
    return (
        <div className="Inscription-container">
            <p>Inscription</p>
            <p>connecter : { logged ? 'oui' : 'non'}</p>
            <button onClick={() => dispatch(SIGN_IN())}>
                {logged ? "se deconnecter" : "se connecter"}
            </button>
        </div>
    )
};

export default Inscription;
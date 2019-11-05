import React from 'react';
import './Input.scss';

const Input = ({value, entitled, type, placeholder, width}) => {
   return (
      <div className="input" style={{width: `${width}`}}>
         <label className="input-label" htmlFor={value}>{entitled}</label>
         <input className="input-item" type={type} placeholder={placeholder} name={value}/>
      </div>
   );
};

export default Input;
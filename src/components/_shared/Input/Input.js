import React from 'react';
import './Input.scss';

const Input = ({value, name, entitled, type, placeholder, width, onChangeValue}) => {

   return (
      <div className="input" style={{width: `${width}`}}>
         <label className="input-label">{entitled}</label>
         <input className="input-item" type={type} placeholder={placeholder} value={value} name={name} onChange={onChangeValue}/>
      </div>
   );
};

export default Input;
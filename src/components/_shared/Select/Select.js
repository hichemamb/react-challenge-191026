import React from 'react';
import './Select.scss';

const Select = ({skillValue, markValue, width, onChangeValue}) => {

   return (
      <div className="input" style={{width: `${width}`}}>
         <label className="input-label">Intitulé</label>
         <select name="skill" value={skillValue} onChange={onChangeValue}>
            <option>--Intitulé--</option>
            <option>Programmation côté client</option>
            <option>Programmation côté serveur</option>
            <option>Design UI</option>
            <option>UX</option>
            <option>Gestion de projet</option>
         </select>
         <label className="input-label">Intitulé</label>
         <select name="mark" value={markValue} onChange={onChangeValue}>
            <option>--Note--</option>
            <option>A : excellente maîtrise</option>
            <option>B : bonne maîtrise</option>
            <option>C : connaît les bases</option>
            <option>D : des lacunes</option>
            <option>E : grosses incompréhensions</option>
            <option>F : totalement inconnu</option>
         </select>
      </div>
   );
};

export default Select;
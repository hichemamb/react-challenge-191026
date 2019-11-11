import React from 'react';
import './Select.scss';

const Select = ({skillValue, markValue, width, onChangeValue}) => {

   return (
      <div className="select" style={{width: `${width}`}}>
         <div className="select-item">
            <label className="select-label">Intitulé</label>
            <select name="skill" value={skillValue} onChange={onChangeValue}>
               <option>--Intitulé--</option>
               <option>Programmation côté client</option>
               <option>Programmation côté serveur</option>
               <option>Design UI</option>
               <option>UX</option>
               <option>Gestion de projet</option>
            </select>
         </div>
         <div className="select-item">
            <label className="select-label">Note</label>
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
      </div>
   );
};

export default Select;
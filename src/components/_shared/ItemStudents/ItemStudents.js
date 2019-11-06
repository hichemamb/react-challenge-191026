import React from 'react';
import './ItemStudents.scss';

const ItemStudents = ({firstname, lastname}) => {
   return (
      <div className="students">
        <ul className="students-list">
           <li>
                <span className="students-list__name">Hichem</span>
                <span className="students-list__name">AMAR BENSABER</span>
            </li>
        </ul>
      </div>
   );
};

export default ItemStudents;
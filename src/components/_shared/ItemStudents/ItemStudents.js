import React from 'react';
import './ItemStudents.scss';

const ItemStudents = ({firstname, lastname}) => {
   return (
       <div>
         <div className="studentsItem">
            <ul className="studentsItem-list">
               <li>
                  <span className="studentsItem-list__name">Hichem</span>
                  <span className="studentsItem-list__name">AMAR BENSABER</span>
               </li>
            </ul>
         </div>
       </div>
   );
};

export default ItemStudents;
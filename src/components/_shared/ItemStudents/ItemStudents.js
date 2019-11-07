import React from 'react';
import './ItemStudents.scss';

const ItemStudents = ({firstname, lastname}) => {
   const studentsName = ['Thomas Franja', 'Hichem AMAR BENSABER', 'Thomas Deruel'];
   return (
       <div>
         <div className="studentsItem">
            <ul className="studentsItem-list">
               {studentsName.map((value, index) => {
                  return (
                     <li>
                        <span className="studentsItem-list__name" key={index}>{value}</span>
                        {/* <span className="studentsItem-list__name">AMAR BENSABER</span> */}
                     </li>
                  )
               })}
               {/* <li>
                  <span className="studentsItem-list__name">Hichem</span>
                  <span className="studentsItem-list__name">AMAR BENSABER</span>
               </li> */}
            </ul>
         </div>
       </div>
   );
};

export default ItemStudents;
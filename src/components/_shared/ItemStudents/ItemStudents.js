import React from 'react';
import './ItemStudents.scss';
import IconUser from '../../../assets/img/icon-user.svg';

const ItemStudents = () => {
   const studentsName = ['Nancy Campbell','Sofia Hanna','Nino Lam','Maxime Charpentier','Mathieu Blok','Jay Dogo','Joe Texeira','Antoine Beaudoire','Thomas Franja', 'Hichem AMAR BENSABER', 'Thomas Deruel'];
   return (
       <div>
         <div className="studentsItem">
            <ul>
               {studentsName.map((value, index) => {
                  return (
                     <a href="/" className="studentsItem__link">
                        <li className="studentsItem-list">
                           <img className="studentsItem-list__icon" src={IconUser}/>
                           <span className="studentsItem-list__name" key={index}>{value}</span>
                        </li>
                     </a>
                  )
               })}
            </ul>
         </div>
       </div>
   );
};

export default ItemStudents;
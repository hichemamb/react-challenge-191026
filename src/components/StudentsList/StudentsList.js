import React from 'react';
import {useSelector, useDispatch, useStore} from 'react-redux';

import './StudentsList.scss';
import Header from '../_shared/Header/Header';
import ItemStudents from '../_shared/ItemStudents/ItemStudents';


const StudentsList = () => {
   const studentsName = ['Nancy Campbell','Sofia Hanna','Nino Lam','Maxime Charpentier','Mathieu Blok','Jay Dogo','Joe Texeira','Antoine Beaudoire','Thomas Franja', 'Hichem AMAR BENSABER', 'Thomas Deruel'];
   return (
      <div>
         <Header/>
         <section className="students">
            <h1 className="students__title"><strong>Liste des étudiants</strong></h1>
            <div className="studentsItem">
               <ul>
               {studentsName.map((name, alt) => {
                  return (
                     <a href="/" className="studentsItem__link">
                        <li className="studentsItem__list">
                           <ItemStudents name={name} alt={alt}/>   
                        </li>
                     </a>
                  )
               })}
               </ul>
            </div>
         </section>
      </div>
   );
};

export default StudentsList;
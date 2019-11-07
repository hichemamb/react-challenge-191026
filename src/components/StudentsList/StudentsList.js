import React from 'react';
import {useSelector, useDispatch, useStore} from 'react-redux';

import './StudentsList.scss';
import Header from '../_shared/Header/Header';
import ItemStudents from '../_shared/ItemStudents/ItemStudents';


const StudentsList = () => {

   return (
      <div>
         <Header/>
         <section className="students">
            <h1 className="students__title"><strong>Liste des étudiants</strong></h1>
            <ItemStudents/>
         </section>
      </div>
   );
};

export default StudentsList;
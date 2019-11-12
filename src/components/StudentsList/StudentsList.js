import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch, useStore } from 'react-redux';

import './StudentsList.scss';
import Header from '../_shared/Header/Header';
import ItemStudents from '../_shared/ItemStudents/ItemStudents';
import { studentsList } from "../../utils/api";
import { addStudents } from "../../action";
import { Link } from "react-router-dom";

const StudentsList = () => {

   //const students = useSelector(state => state.studentsList);
   const [loading, setLoading] = useState(true);
   const [students, setStudents] = useState([]);
   const dispatch = useDispatch();
   const store = useStore();

   useEffect(() => {
      studentsList().then(res => {
         dispatch(addStudents(res))
         setStudents(store.getState().studentsList)
         setLoading(false);
      })
   }, []);
   return (
      <div>
         <Header />
         <section className="students">
            <h1 className="students__title"><strong>Liste des étudiants</strong></h1>
            <div className="studentsItem">
               <ul>
                  {students.map((student, alt) => {
                     return (
                        <Link to={"student-view/" + student.id} key={alt} className="studentsItem__link">
                           <li className="studentsItem__list">
                              <ItemStudents name={`${student.firstname} ${student.lastname}`} alt={student.id} />
                           </li>
                        </Link>
                     )
                  })}
               </ul>
            </div>
         </section>
      </div>
   );
};

export default StudentsList;
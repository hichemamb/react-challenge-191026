import React, {useState, useEffect} from 'react';
import {useDispatch, useStore} from 'react-redux';

import './StudentsList.scss';
import Header from '../_shared/Header/Header';
import ItemStudents from '../_shared/ItemStudents/ItemStudents';
import {studentsList} from '../../utils/api';
import {addStudents} from '../../action';
import {Link} from 'react-router-dom';

const StudentsList = () => {

   const [loading, setLoading] = useState(true);
   const [students, setStudents] = useState([]);
   const [selectList, setSelectList] = useState('Indifférent');
   const dispatch = useDispatch();
   const store = useStore();

   useEffect(() => {
      studentsList().then(res => {
         dispatch(addStudents(res));
         setStudents(store.getState().studentsList);
         setLoading(false);
      });
   }, []);

   const handleChange = event => {
      setSelectList(event.target.value);
   };

   const filteredStudents = () => {
      return selectList === 'Indifférent' ? students : students.filter(student => student.skills.find(element => element.skill.includes(selectList)));
   };

   return (
      <div>
         <Header/>
         <section className="students">
            <h1 className="students__title"><strong>Liste des étudiants</strong></h1>
            <div className="select">
               <select className="select-students" name="skill" value={selectList} onChange={handleChange}>
                  <option>Indifférent</option>
                  <option>Programmation côté client</option>
                  <option>Programmation côté serveur</option>
                  <option>Design UI</option>
                  <option>UX</option>
                  <option>Gestion de projet</option>
               </select>
            </div>
            <div className="studentsItem">
               <ul>
                  {filteredStudents().map((student, alt) => {
                     return (
                        <Link to={'student-view/' + student.id} key={alt} className="studentsItem__link">
                           <li className="studentsItem__list">
                              <ItemStudents name={`${student.firstname} ${student.lastname}`} alt={student.id}/>
                           </li>
                        </Link>
                     );
                  })}
               </ul>
            </div>
         </section>
      </div>
   );
};

export default StudentsList;
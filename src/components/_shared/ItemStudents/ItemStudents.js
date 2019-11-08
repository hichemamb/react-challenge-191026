import React from 'react';
import './ItemStudents.scss';
import IconUser from '../../../assets/img/icon-user.svg';

const ItemStudents = ({name, alt}) => {
   return (
       <div>
            <img className="studentsItem__icon" src={IconUser} alt={alt}/>
            <span className="studentsItem__name"> {name} </span>
       </div>
   );
};

export default ItemStudents;
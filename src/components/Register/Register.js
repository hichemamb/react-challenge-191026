import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './Register.scss';
import Card from '../_shared/Card/Card';
import Input from '../_shared/Input/Input';

const Register = () => {

   return (
      <div className="register">
         <Card title="Profil étudiant" width="300px">
            <Input entitled="Nom" placeholder="Nom" value="lastname" type="text" width="200px"/>
            <Input entitled="Prénom" placeholder="Prénom" value="firstname" type="text" width="200px"/>
         </Card>
      </div>
   );
};

export default Register;
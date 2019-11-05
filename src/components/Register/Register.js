import React from 'react';
import {useSelector, useDispatch, useStore} from 'react-redux';
import {handleChange} from '../../action/index';
import {register} from '../../utils/api';

import './Register.scss';
import Header from '../_shared/Header/Header';
import Card from '../_shared/Card/Card';
import Input from '../_shared/Input/Input';

const Register = () => {

   const userInfos = useSelector(state => state.userInfos);
   const dispatch = useDispatch();
   const store = useStore();

   const onChange = event => {
     dispatch(handleChange(event.target.name, event.target.value))
   };

   const onRegister = () => {
      register(store.getState().userInfos);
   };

   return (
      <div>
         <Header/>
         <div className="register">
            <Card title="Profil étudiant" width="75%">
               <Input entitled="Nom" placeholder="Nom" value={userInfos.lastname} name="lastname" onChangeValue={onChange} type="text" width="200px"/>
               <Input entitled="Prénom" placeholder="Prénom" value={userInfos.firstname} name="firstname" onChangeValue={onChange} etype="text" width="200px"/>
               <Input entitled="Email" placeholder="prénom.nom@hetic.net" value={userInfos.email} name="email" onChangeValue={onChange} type="email" width="200px"/>
               <Input entitled="Promotion" placeholder="Web3-P2020" value={userInfos.promotion} name="promotion" onChangeValue={onChange} type="text" width="200px"/>
               <Input entitled="Mot de passe" placeholder="********" value={userInfos.password} name="password" onChangeValue={onChange} type="password" width="200px"/>
            </Card>
            <Card title="Cursus" width="75%">
               <Input entitled="Ecrivez quelques lignes sur votre parcours" placeholder="Ici d'un baccalauréat scientifique, je ..." value={userInfos.description} name="description" onChangeValue={onChange} type="textarea" width="400px"/>
            </Card>
            <button onClick={onRegister}>ENREGISTRER</button>
         </div>
      </div>
   );
};

export default Register;
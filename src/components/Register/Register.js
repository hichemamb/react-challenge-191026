import React from 'react';
import {useSelector, useDispatch, useStore} from 'react-redux';
import {handleChange, handleChangeWithIndex, addSkill} from '../../action/index';
import {register} from '../../utils/api';

import './Register.scss';
import Header from '../_shared/Header/Header';
import Card from '../_shared/Card/Card';
import Input from '../_shared/Input/Input';
import Select from '../_shared/Select/Select';
import GreenButton from '../_shared/GreenButton/GreenButton';
import PictureUploader from '../_shared/PictureUploader/PictureUploader';

const Register = () => {

   const userInfos = useSelector(state => state.userInfos);
   const dispatch = useDispatch();
   const store = useStore();

   const onChange = event => {
     dispatch(handleChange(event.target.name, event.target.value))
   };

   const onChangeWithIndex = index => event => {
      dispatch(handleChangeWithIndex(event.target.name, event.target.value, index))
   };

   const onAddSkill = () => {
      dispatch(addSkill({skill:"", mark:""}))
   };

   const onRegister = () => {
      register(store.getState().userInfos);
   };

   return (
      <div>
         <Header/>
         <div className="register">
            <Card title="Profil étudiant" width="75%">
               <PictureUploader />
               <Input entitled="Nom" placeholder="Nom" value={userInfos.lastname} name="lastname" onChangeValue={onChange} type="text" width="200px"/>
               <Input entitled="Prénom" placeholder="Prénom" value={userInfos.firstname} name="firstname" onChangeValue={onChange} etype="text" width="200px"/>
               <Input entitled="Email" placeholder="prénom.nom@hetic.net" value={userInfos.email} name="email" onChangeValue={onChange} type="email" width="200px"/>
               <Input entitled="Promotion" placeholder="Web3-P2020" value={userInfos.promotion} name="promotion" onChangeValue={onChange} type="text" width="200px"/>
               <Input entitled="Mot de passe" placeholder="********" value={userInfos.password} name="password" onChangeValue={onChange} type="password" width="200px"/>
            </Card>
            <Card title="Cursus" width="75%">
               <Input entitled="Ecrivez quelques lignes sur votre parcours" placeholder="Ici d'un baccalauréat scientifique, je ..." value={userInfos.description} name="description" onChangeValue={onChange} type="textarea" width="400px"/>
            </Card>
            <Card title="Compétences" width="75%">
               {userInfos.skills.map((element, index) =>
                  <div key={index} className="register-skills">
                     <Select skillValue={element.skill} markValue={element.mark} onChangeValue={onChangeWithIndex(index)} width="200px"/>
                  </div>
               )}
               <button className="register-skills__button" onClick={onAddSkill}>Ajouter une nouvelle compétence</button>
            </Card>
            <GreenButton clickToRegister={onRegister} content="ENREGISTRER" redirection="/login" width="250px"/>
         </div>
      </div>
   );
};

export default Register;
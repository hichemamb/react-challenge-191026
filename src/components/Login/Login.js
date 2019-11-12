import React from 'react';
import {useSelector, useDispatch, useStore} from 'react-redux';
import {Link} from 'react-router-dom';
import heticLogo from '../../assets/img/hetic-logo.png';


import {handleChange} from '../../action/index';
import {login} from '../../utils/api';

import './Login.scss';
import Input from '../_shared/Input/Input';

const Login = () => {

   

   const userInfos = useSelector(state => state.userInfos);
   const dispatch = useDispatch();

   const onChange = event => {
       dispatch(handleChange(event.target.name, event.target.value))
    };

   const onLogin = () => {
      const {email, password} = userInfos;
      login({email, password})
         .then(res => {
           console.log(res);
         })        
   };

   return (
      <div className="login">
         <div className="page">
         <img className="login-logo" alt="logo" src={heticLogo}/>
         <form className="login-form">
            <div className="login-form-input"  title="Profil étudiant" width="100%">
               <Input className="login-input" onChangeValue={onChange} value={userInfos.email} placeholder="prénom.nom@hetic.net" name="email" type="email" width="100%"/>
               <Input className="login-input" onChangeValue={onChange} value={userInfos.password} placeholder="Mot de passe" name="password" type="password" width="100%"/>
            </div>
            <Link onClick={onLogin} className="login-form-sign-in">S'identifier</Link>
            <Link className="login-creation-account" to={`/register`}><span>C</span>réer un compte</Link>
         </form>
         </div>
      </div>
   )
};


export default Login;


// const userLogin = useSelector(state => state.userLogin);
// const dispatch = useDispatch();
// const store = useStore();

// const onChange = event => {
//    dispatch(handleChange(event.target.name, event.target.value))
//  };

//  const handleSubmit = () => {
//    userLoginFetch(store.getState().userLogin);
//   // userLoginFetch(store.getState().user);
// };
// console.log(handleSubmit);

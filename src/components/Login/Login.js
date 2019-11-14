import React from 'react';
import {useSelector, useDispatch, useStore } from 'react-redux';
import {Link, Redirect,} from 'react-router-dom';
import heticLogo from '../../assets/img/hetic-logo.png';

import {push} from 'react-router-redux';
import {browserHistory} from 'react-router'
import {handleChange, addError, addErrorEmpty} from '../../action/index';
import {login} from '../../utils/api';
import { setToken } from "../../utils/token";

import './Login.scss';
import Input from '../_shared/Input/Input';

const Login = () => {

   const userInfos = useSelector(state => state.userInfos);
   const dispatch = useDispatch();
   const store = useStore();


   const onChange = event => {
       dispatch(handleChange(event.target.name, event.target.value))
    };

   const onLogin = () => {
      const {email, password, isLoggin, isEmpty } = userInfos;

      login({email, password})

         .then(res => {
            if (email === "" || password === "") {
              dispatch(addErrorEmpty());
            } 
            else if(res.token) {
               setToken(res.token)
               browserHistory.push('/students-list');
               window.location.reload();
            } 
            else {
              dispatch(addError());
            }
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
               <div className={userInfos.isLoggin ? "login-show" : "login-hide"}>Identifiant ou Mot de passe incorrect</div>
               <div className={userInfos.isEmpty ? "login-show" : "login-hide"}>Veuillez remplir tout les champs</div>
            </div>
            <Link onClick={onLogin} className="login-form-sign-in">S'identifier</Link>
            <Link className="login-creation-account" to={`/register`}><span>C</span>réer un compte</Link>
         </form>
         </div>
      </div>
   )
};

export default Login;
import React from 'react';
import {useSelector, useDispatch, useStore, } from 'react-redux';
import {Link} from 'react-router-dom';

import {handleChange} from '../../action/index';
import {login} from '../../utils/api';

import './Login.scss';
import Card from '../_shared/Card/Card';
import Input from '../_shared/Input/Input';

const Login = () => {

   const handleSubmit = event =>  {
      event.preventDefault()
      this.props.userLoginFetch(this.state)
    }
   

   return (
      <form onSubmit={handleSubmit}>
         <div className="login">
            <div title="Profil étudiant" width="75%">
               <Input entitled="Email" placeholder="prénom.nom@hetic.net" name="email" type="email" width="200px"/>
               <Input entitled="Mot de passe" placeholder="********" name="password" type="password" width="200px"/>
            </div>
            <button>SE CONNECTER</button>
            <Link to={`/register`}>Créer un compte</Link>
         </div>
      </form>
   )
};


export default Login;
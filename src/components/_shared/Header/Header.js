import React, {useState, useEffect} from 'react';
import './Header.scss';
import Logo from '../../../assets/img/logo.svg';
import Dna from '../../../assets/img/dna.svg';
import Picture from '../../_shared/Picture/Picture';
import {getToken, decodeToken} from '../../../utils/token';
import {Link} from 'react-router-dom';
import {getStudentById} from '../../../utils/api';


const Header = () => {
   const [picture, setPicture] = useState(null);
   useEffect(() => {
      if (picture === null && getToken()) {
         getStudentById(decodeToken()).then(res => {
            setPicture(res.picture);
         });
      }
   }, []);

   const setLogoLink = () => {
      const currentUrl = window.location.href;
      if (currentUrl.includes('register')) {
         return (
            <Link to="/register">
               <div className="header-left">
                  <img className="header-left__logo" src={Logo} alt="Hetic Logo"/>
               </div>
            </Link>
         );
      } else {
         return (
            <Link to="/students-list">
               <div className="header-left">
                  <img className="header-left__logo" src={Logo} alt="Hetic Logo"/>
               </div>
            </Link>
         );
      }
   };

   return (
      <div className="header">
         {setLogoLink()}
         <div className="header-right">
            <h1 className="header-right__title">HETIC STUDENTS</h1>
            <img src={Dna} alt="Hourglass Icon"/>
         </div>
         {
            getToken() && (
               <div className="header-picture">
                  <Link to="/student/profil">
                     <Picture src={picture} width={50} height={50}/>
                  </Link>
               </div>
            )
         }
      </div>
   );
};

export default Header;
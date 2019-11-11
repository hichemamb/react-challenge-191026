import React from 'react';
import './Header.scss';
import Logo from '../../../assets/img/logo.svg';

const Header = () => {
   return (
      <div className="header">
         <div className="header-left">
            <img className="header-left__logo" src={Logo} alt="Hetic Logo"/>
         </div>
         <div className="header-right">
            <h1 className="header-right__title">HETIC STUDENTS</h1>
         </div>
      </div>
   );
};

export default Header;
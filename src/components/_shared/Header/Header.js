import React, { useEffect } from 'react';
import './Header.scss';
import Logo from '../../../assets/img/logo.svg';
import Picture from "../../_shared/Picture/Picture";
import { getToken, decodeToken } from "../../../utils/token";
import { Link } from "react-router-dom";
import { getStudentById } from '../../../utils/api';
import { updateStudent } from "../../../action";
import { useSelector, useDispatch, useStore } from 'react-redux';

const Header = () => {
   const userInfos = useSelector(state => state.userInfos);
   const dispatch = useDispatch();
   useEffect(() => {
      if (getToken()) {
         getStudentById(decodeToken()).then(res => {
            dispatch(updateStudent(res))
         })
      }
   }, [getToken()])
   return (
      <div className="header">
         <div className="header-left">
            <img className="header-left__logo" src={Logo} alt="Hetic Logo" />
         </div>
         <div className="header-right">
            <h1 className="header-right__title">HETIC STUDENTS</h1>
         </div>
         {
            getToken() && (
               <div className="header-picture">
                  <Link to="/student/profil">
                     <Picture src={userInfos.picture} width={50} height={50} />
                  </Link>
               </div>
            )
         }
      </div>
   );
};

export default Header;
import React from 'react';
import './GreenButton.scss';
import {Link} from 'react-router-dom';

const GreenButton = ({content, redirection, width, clickToRegister}) => {
   return (
      <Link className="greenButton" to={redirection} style={{width: `${width}`}} onClick={clickToRegister}>
         {content}
      </Link>
   );
};

export default GreenButton;
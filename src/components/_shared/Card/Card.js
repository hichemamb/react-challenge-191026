import React from 'react';
import './Card.scss';

const Card = ({title, width, children}) => {
   return (
      <div className="card" style={{width: `${width}`}}>
        <div className="card-header">
           <span className="card-header__title">{title}</span>
           <div className="card-header__separation"></div>
        </div>
         <div className="card-content">
            {children}
         </div>
      </div>
   );
};

export default Card;
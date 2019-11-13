import React from 'react';
import './Card.scss';

const Card = ({ title, width, ModifiedComponent = null, children }) => {
   return (
      <div className="card" style={{ width: `${width}` }}>
         <div className="card-header">
            { ModifiedComponent === null ?
               <span className="card-header__title">{title}</span>
               :
               <div className="card-header-modified">
                  <span className="card-header__title">{title}</span>
                  {<ModifiedComponent/>}
               </div>
            }
            <hr className="card-header__separation"></hr>
         </div>
         <div className="card-content">
            {children}
         </div>
      </div>
   );
};

export default Card;
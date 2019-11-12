import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import './PictureUploader.scss';
import {uploadPicture} from '../../../utils/api';
import {addPicture} from '../../../action/index';

const PictureUploader = () => {

   const userInfos = useSelector(state => state.userInfos);
   const dispatch = useDispatch();

   let [file, setFile] = useState(null);
   let [loading, setLoading] = useState(false);

   const isEmpty = (string) => string === '';
   const classLoading = () => {
      if (loading) return 'isLoading';
   };

   const onChange = event => {
      setFile(event.target.files[0]);
   };

   useEffect(() => {
      if (file) {
         setLoading(true);
         const formData = new FormData();
         formData.append('picture', file);
         uploadPicture(formData)
            .then(res => {
               dispatch(addPicture(res));
               setLoading(false);
            })
            .catch(() => {
               setLoading(false);
            });
      }
   }, [file]);
   return (
      <div className="upload">
         <span className="upload-label">Sélectionnez une photo de profil</span>
         <div className="upload-item">

            {loading &&
            <div className="upload-item-loadingContainer">
               <div className="upload-item-loadingContainer-img"></div>
            </div>
            }
            {isEmpty(userInfos.picture) ?
               <img
                  className={'upload-item-default ' + classLoading()}
                  name="picture"
                  alt=""
                  src={require('../../../assets/img/default.png')}
               /> :
               <div className="upload-item-selectedContainer">
                  <p>Modifier</p>
                  <img className="upload-item-selectedContainer-selected" name="picture" src={userInfos.picture}
                       alt="selected"/>
               </div>
            }
            <input className="upload-item-input" name="picture" type="file" onChange={onChange}></input>
         </div>
      </div>
   );
};

export default PictureUploader;
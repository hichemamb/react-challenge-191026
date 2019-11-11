import React, { useState, useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import './PictureUploader.scss';
import {uploadPicture} from '../../../utils/api';
import {addPicture} from '../../../action/index';

const PictureUploader = () => {

    const userInfos = useSelector(state => state.userInfos);
    const dispatch = useDispatch();

    let [file, setFile] = useState(null);
    let [loading, setLoading] = useState(false);

    const isEmpty = (string) => string === "";
    const classLoading = () => {if(loading) return 'isLoading'};

    const onChange = event => {
        setFile(event.target.files[0])
    };

    useEffect(() => {
        if (file) {
            setLoading(true);
            const formData = new FormData();
            formData.append('picture', file);
            uploadPicture(formData)
                .then(res => {
                    dispatch(addPicture(res));
                    setLoading(false)
                })
            .catch(()=>{
                setLoading(false)
            })
        }
    }, [file]);
    return (
        <div className="upload">
            {loading &&
                <div className="upload-loadingContainer">
                    <div className="upload-loadingContainer-img"></div>
                </div>
            }
            {isEmpty(userInfos.picture)?
                <img 
                    className={"upload-default "+ classLoading()}
                    name="picture"
                    alt=""
                    src={require('../../../assets/img/default.png')}
                    />:
                    <div className="upload-selectedContainer">
                        <p>Modifier</p>
                        <img className="upload-selectedContainer-selected" name="picture" src={userInfos.picture} alt="selected"/>
                    </div>
            }
            <input  className="upload-input" name="picture" type="file" onChange={onChange}></input>
        </div>
    );
}

export default PictureUploader
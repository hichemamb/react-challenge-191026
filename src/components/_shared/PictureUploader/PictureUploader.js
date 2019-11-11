import React, { useState, useEffect } from 'react';
import './PictureUploader.scss';


const PictureUploader = () => {

    let [file, setFile] = useState(null);

    let [uploadedFile, setUploadedFile] = useState({});
    let [loading, setLoading] = useState(false);

    const isEmpty = (obj) => Object.entries(obj).length === 0 && obj.constructor === Object;
    const classLoading = () => {if(loading) return 'isLoading'};

    const onChange = event => {
        setFile(event.target.files[0])
    };

    useEffect(() => {
        if (file) {
            setLoading(true);
            const formData = new FormData();
            formData.append('picture', file);
            fetch('http://localhost:8080/upload',{
                method: 'POST',
                body: formData,
            })
            .then(res => res.json())
                .then(res => {
                    setUploadedFile(res);
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
            {isEmpty(uploadedFile)?
                <img 
                    className={"upload-default "+ classLoading()}
                    name="picture"
                    alt=""
                    src={require('../../../assets/img/default.png')}
                    />:
                    <div className="upload-selectedContainer">
                        <p>Modifier</p>
                        <img className="upload-selectedContainer-selected" name="picture" src={uploadedFile} alt="selected"/>
                    </div>
            }
            <input  className="upload-input" name="picture" type="file" onChange={onChange}></input>
        </div>
    );
}

export default PictureUploader
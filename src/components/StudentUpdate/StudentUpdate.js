import React, { useEffect, useState } from 'react';
import "./StudentUpdate.scss";

import Header from '../_shared/Header/Header';
import Card from '../_shared/Card/Card';
import ButtonBack from '../_shared/ButtonBack/ButtonBack';
import Input from "../_shared/Input/Input";
// import Chips from "../_shared/Chips/Chips";
import Select from "../_shared/Select/Select";
import PictureUploader from "../_shared/PictureUploader/PictureUploader";

import { getStudentById } from "../../utils/api";
import { updateStudent } from "../../action";
import { useSelector, useDispatch, useStore } from 'react-redux';
import { handleChange, handleChangeWithIndex, addSkill } from '../../action/index';
import { decodeToken } from "../../utils/token";
import { updateData } from "../../utils/api";

const StudentUpdate = () => {
    const userInfos = useSelector(state => state.userInfos);
    const dispatch = useDispatch();
    const store = useStore();
    const [load, setLoad] = useState(true);

    const updateButton = () => {
        return (
            <button onClick={()=>updateData(userInfos)}>Modifier</button>
        )
    }
    useEffect(() => {
        getStudentById(decodeToken()).then(res => {
            dispatch(updateStudent(res))
            setLoad(false)
        })
    }, [])

    const onChange = event => {
        dispatch(handleChange(event.target.name, event.target.value))
    };

    const onAddSkill = () => {
        dispatch(addSkill({ skill: "", mark: "" }))
    };

    const onChangeWithIndex = index => event => {
        dispatch(handleChangeWithIndex(event.target.name, event.target.value, index))
    };
    if (load) {
        return <p>chargement</p>
    }
    return (
        <div>
            <Header />
            <div className="studentupdate">
                <Card title="Profil étudiant" width="75%" ModifiedComponent={updateButton}>
                    <div className="studentupdate-profil">
                        <div className="studentupdate-profil-picandbirthday">
                            <div className="studentupdate-profil-picandbirthday__picture">
                                <PictureUploader />
                            </div>
                        </div>
                        <div className="studentupdate-profil-nameandemail">
                            <div className="studentupdate-profil-nameandemail__names">
                                <h2>Nom/prénom</h2>
                                <Input entitled="Nom" placeholder="Nom" value={userInfos.lastname} name="lastname" onChangeValue={onChange} type="text" width="200px" />
                                <Input entitled="Prénom" placeholder="Prénom" value={userInfos.firstname} name="firstname" onChangeValue={onChange} type="text" width="200px" />
                            </div>
                            <div className="studentupdate-profil-nameandemail__names">
                                <Input entitled="Email" placeholder="person@hetic.net" value={userInfos.email} name="email" onChangeValue={onChange} type="text" width="200px" />
                            </div>
                        </div>
                        <div className="studentupdate-profil__promotion">
                            <div className="studentupdate-profil-nameandemail__names">
                                <h2>Promotion</h2>
                                <Input entitled="Promotion" placeholder="Promotion" value={userInfos.promotion} name="promotion" onChangeValue={onChange} type="text" width="200px" />
                            </div>
                        </div>
                    </div>
                </Card>
                <Card title="Cursus" width="75%" ModifiedComponent={updateButton}>
                    <div className="studentupdate__cursus">
                        <h2>Ecrivez en quelques lignes votre parcours</h2>
                        <textarea placeholder="Décrivez votre cursus" name="description" value={userInfos.description} onChange={onChange}>
                        </textarea>
                    </div>
                </Card>
                {/* <Card title="Compétences" width="75%" UpdateComponent={buttonUpdate}>
                    <h2>Ajouter des compétences</h2>
                    {
                        skillsList.map((skill, id) => {
                            return (
                                <Chips name={skill} />
                            )
                        })
                    }
                    <div className="studentupdate-other">
                        <Input placeholder="Autre" value={null} name={userInfos.lastname} onChangeValue={onChange} type="text" width="200px" />
                        <button className="studentupdate-other__plus">+</button>
                    </div>
                </Card> */}
                <Card title="Modifier ou Ajouter des compétences" width="75%" ModifiedComponent={updateButton}>
                    {userInfos.skills.map((element, index) =>
                        <div key={index} className="register-skills">
                            <Select skillValue={element.skill} markValue={element.mark} onChangeValue={onChangeWithIndex(index)} width="200px" />
                        </div>
                    )}
                    <button className="register-skills__button" onClick={onAddSkill}>Ajouter une nouvelle compétence</button>
                </Card>
                <ButtonBack />
            </div>
        </div>
    )
}

export default StudentUpdate;
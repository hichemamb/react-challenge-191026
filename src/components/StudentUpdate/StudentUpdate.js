import React from 'react';
import "./StudentUpdate.scss";

import Header from '../_shared/Header/Header';
import Card from '../_shared/Card/Card';
import ButtonBack from '../_shared/ButtonBack/ButtonBack';
import Input from "../_shared/Input/Input";
import Chips from "../_shared/Chips/Chips";
import { useSelector, useDispatch, useStore } from 'react-redux';
import { handleChange } from '../../action/index';

const skillsList = ['vue', 'react', 'php', 'swift', 'kotlin', 'docker', 'javascript', 'css', 'html'];

const StudentUpdate = () => {
    const userInfos = useSelector(state => state.userInfos);
    const dispatch = useDispatch();
    const store = useStore();

    const buttonUpdate = () => {
        return (
            <button> Modifier</button>
        )
    }
    const onChange = event => {
        dispatch(handleChange(event.target.name, event.target.value))
    };

    return (
        <div>
            <Header />
            <div className="studentupdate">
                <Card title="Profil étudiant" width="75%" UpdateComponent={buttonUpdate}>
                    <div className="studentupdate-profil">
                        <div className="studentupdate-profil-picandbirthday">
                            <div className="studentupdate-profil-picandbirthday__picture">
                                <h2>Sélectionner une photo de profil</h2>
                                <p>profil</p>
                            </div>
                        </div>
                        <div className="studentupdate-profil-nameandemail">
                            <div className="studentupdate-profil-nameandemail__names">
                                <h2>Nom/prénom</h2>
                                <Input entitled="Nom" placeholder="Nom" value={null} name={userInfos.lastname} onChangeValue={onChange} type="text" width="200px" />
                                <Input entitled="Prénom" placeholder="Prénom" value={null} name={userInfos.firstname} onChangeValue={onChange} type="text" width="200px" />
                            </div>
                            <div className="studentupdate-profil-nameandemail__names">
                                <Input entitled="Email" placeholder="person@hetic.net" value={userInfos.email} name="email" onChangeValue={onChange} type="text" width="200px" />
                            </div>

                        </div>
                    </div>
                </Card>
                <Card title="Cursus" width="75%" UpdateComponent={buttonUpdate}>
                    <div className="studentupdate__cursus">
                        <h2>Ecrivez en quelques lignes votre parcours</h2>
                        <textarea placeholder="Décrivez votre cursus" name="description" value={userInfos.description} onChange={onChange}>
                        </textarea>
                    </div>
                </Card>
                <Card title="Compétences" width="75%" UpdateComponent={buttonUpdate}>
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
                </Card>
                <ButtonBack />
            </div>
        </div>
    )
}

export default StudentUpdate;
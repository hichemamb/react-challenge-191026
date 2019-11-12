import React, { useState, useEffect } from "react";
import "./StudentView.scss";
import { useParams } from "react-router-dom";
import Header from '../_shared/Header/Header';
import Card from '../_shared/Card/Card';
import ButtonBack from '../_shared/ButtonBack/ButtonBack';
import { getStudentById } from "../../utils/api";
import { updateStudent } from "../../action";
import { useSelector, useDispatch, useStore } from 'react-redux';

const StudentView = () => {
    let { id } = useParams();
    
    const [loading, setLoading] = useState(true);
    const [student, setStudent] = useState({
        picture: "",
        lastname: "",
        firstname: "",
        email: "",
        promotion: "",
        description: "",
        skills: [{ skill: "", mark: "" }]
    });
    const dispatch = useDispatch();
    const store = useStore();
    const isDescriptionEmpty = () => student.description === '' ? true : false;
    useEffect(() => {
        // TODO
        getStudentById(id).then(res => {
            dispatch(updateStudent(res))
            setStudent(store.getState().userInfos)
        })
        console.log(id)
    }, [])
    return (
        <div>
            <Header />
            <div className="studentview">
                <Card title="Profil étudiant" width="75%">
                    <section className="studentview-profil">
                        <div className="studentview-profil-img">
                            <div className="studentview-profil-img-container">
                                <img src={student.picture} alt="face" />
                            </div>
                        </div>
                        <div className="studentview-profil-container">
                            <div className="studentview-profil-container-nameandpromo">
                                <h1>{student.firstname + ' ' + student.lastname}</h1>
                                <p>{student.promotion}</p>
                            </div>
                            <div className="studentview-profil-container-moreinfo">
                                <div className="studentview-profil-container-moreinfo-informations">
                                    <h2>Informations</h2>
                                    <p>{student.email}</p>
                                </div>
                                <div className="studentview-profil-container-moreinfo-skills">
                                    <h2>Compétences</h2>
                                    <ul>
                                        à faire
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>
                </Card>
                <Card title="Cursus" width="75%">
                    {
                        isDescriptionEmpty() ?
                            <p style={{ opacity: 0.5 }}>Aucune déscription pour le moment</p> :
                            <p>{student.description}</p>
                    }
                </Card>
            </div>
            <div className="studentview_btn">
                <ButtonBack />
            </div>
        </div>
    )
};

export default StudentView;
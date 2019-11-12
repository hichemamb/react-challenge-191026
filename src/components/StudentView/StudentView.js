import React, { useEffect } from "react";
import "./StudentView.scss";
import { useParams } from "react-router-dom";
import Header from '../_shared/Header/Header';
import Card from '../_shared/Card/Card';
import ButtonBack from '../_shared/ButtonBack/ButtonBack';

const studentData = {
    firstname: 'Sarah',
    lastname: 'Vidal',
    promotion: 'Web3 P2020',
    picture: "http://teenlife.blogs.pressdemocrat.com/files/2010/09/codding.jpg",
    birthday: '08/12/1996',
    email: 'Sarah.Vidal@hetic.net',
    skills: ['CSS', 'HTML'],
    description: '',
}

const fullName = studentData.firstname + ' ' + studentData.lastname;
const SkillsList = () => studentData.skills.map((skill, id) => <li key={id}>{skill}</li>)
const isDescriptionEmpty = () => studentData.description === '' ? true : false;

const StudentView = () => {
    let { id } = useParams();
    useEffect(() => {
        // TODO
        // make your request HERE :)
        console.log(id)
    })
    return (
        <div>
            <Header />
            <div className="studentview">
                <Card title="Profil étudiant" width="75%">
                    <section className="studentview-profil">
                        <div className="studentview-profil-img">
                            <div className="studentview-profil-img-container">
                                <img src={studentData.picture} alt="face" />
                            </div>
                        </div>
                        <div className="studentview-profil-container">
                            <div className="studentview-profil-container-nameandpromo">
                                <h1>{fullName}</h1>
                                <p>{studentData.promotion}</p>
                            </div>
                            <div className="studentview-profil-container-moreinfo">
                                <div className="studentview-profil-container-moreinfo-informations">
                                    <h2>Informations</h2>
                                    <p>{studentData.email}</p>
                                    <p>{studentData.birthday}</p>
                                </div>
                                <div className="studentview-profil-container-moreinfo-skills">
                                    <h2>Compétences</h2>
                                    <ul>
                                        <SkillsList />
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
                            <p>{studentData.description}</p>
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
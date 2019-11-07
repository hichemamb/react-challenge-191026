import React from "react";
import "./StudentView.scss";

import Header from '../_shared/Header/Header';
import Card from '../_shared/Card/Card';

const StudentView = () => {
    return (
        <div>
            <Header />
            <div className="studentview">
                <Card title="Profil étudiant" width="75%">
                    <section className="studentview-profil">
                        <div className="studentview-profil-img">
                            <div className="studentview-profil-img-container">
                                <img src="http://teenlife.blogs.pressdemocrat.com/files/2010/09/codding.jpg" alt="face" />
                            </div>
                        </div>
                        <div className="studentview-profil-container">
                            <div className="studentview-profil-container-nameandpromo">
                                <h1>Sara Vidal</h1>
                                <p>WEB 3 P2020</p>
                            </div>
                            <div className="studentview-profil-container-moreinfo">
                                <div className="studentview-profil-container-moreinfo-informations">
                                    <h2>Informations</h2>
                                    <p>Sarah.Vidal@hetic.net</p>
                                    <p>08/12/1996</p>
                                </div>
                                <div className="studentview-profil-container-moreinfo-skills">
                                    <h2>Compétences</h2>
                                    <ul>
                                        <li>CSS </li>
                                        <li>HTML </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>
                </Card>
            </div>
            <div className="studentview_btn">
                <button>Retour</button>
            </div>
        </div>
    )
};

export default StudentView;
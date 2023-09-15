import React from "react";
import HeaderNavigation from "../Components/header";
import { certificateData } from "../Database/achievmentData";
import { Link } from 'react-router-dom'

export default function AchievmentPage() {
    return (
        <>
            <HeaderNavigation />

            <div className="container-fluid">

                <div className="row">
                    <i className="text-center h4">CERTIFICATIONS</i>
                </div>
                <div className="row">
                    {
                        certificateData.map((item) => {
                            return (
                                <>
                                    <div className="card-body" style={{ width: '26rem' }} key={item.id}>
                                        <p className="card-title mx-2 text-uppercase fw-bold text-center h5">{item.certificateName}</p>
                                        <p className="card-text mx-2 mb-0"><b>Learning Outcome: </b> <br />{item.learningOutcome}</p>
                                        <p className="card-text mx-2 mt-0 mb-1">📅 {item.completionDate}</p>
                                        <Link to={item.credentialsURL} className="btn btn-outline-primary mx-2 mt-0 mb-4" target="_blank"><i className="bi bi-globe bg-black"></i>Show Credentials</Link>
                                    </div>
                                </>
                            )
                        })
                    }


                </div>
            </div>

        </>
    )
}
import React from "react";
import { certificateData } from "../Database/achievmentData";
import { Link, Outlet } from "react-router-dom"

export default function Certificate() {

    return (
        <>
            {
                certificateData.map((item) => {
                    return (
                        <>
                            <div className="card-body">
                                <h5 className="card-title text-center">{item.certificateName}</h5>
                                <p className="card-text"><b>Learning Outcome: </b> {item.learningOutcome}</p>
                                <p className="card-text"><b>Completion Date: </b> {item.completionDate}</p>
                            </div>
                            <div>
                                <Link to={item.credentialsURL} className="btn btn-primary m-3" target="_blank"><i className="bi bi-globe bg-black"></i>Show Credentials</Link>
                            </div>
                        </>
                    )
                }

                )
            }
        </>
    )
}
import React from "react";
import { certificateData } from "../Database/achievmentData";
import { Link, Outlet } from "react-router-dom"

export default function Certificate() {

    return (
        <>
            {
                certificateData.map((item) => {
                    return (
                        <div className="card border-success  m-3 mx-4" style={{ width: "20rem" }}>
                            {/* <img src={item.imagePath} className="card-img-top img-fluid mt-1" alt="..." style={{ width: "24rem", height: "15rem" }} /> */}
                            <div className="card-body">
                                <h5 className="card-title">{item.certificateName}</h5>
                                <p className="card-text"><b>Learning Outcome: </b> {item.learningOutcome}</p>
                                <p className="card-text"><b>Completion Date: </b> {item.completionDate}</p>
                            </div>
                            <div>
                                <Link to={item.credentialsURL} className="btn btn-primary m-3" target="_blank"><i className="bi bi-globe bg-black"></i>Show Credentials</Link>
                                {/* <Link to={props.githubURL} className="btn btn-primary" target="_blank"><i className="bi bi-github"></i>Visit Github</Link> */}
                            </div>
                        </div>
                    )
                }

                )
            }
        </>
    )
}
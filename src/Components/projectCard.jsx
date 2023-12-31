import React from "react";
import { previuosProjects } from "../Database/projectdb";
import { Link, Outlet } from "react-router-dom"
import '../index.css'

export default function ProjectCard(props) {

    return (
        <>

            <div className="card border-dark m-2" style={{ width: "21rem" }}>
                {/* <img src={props.displayImage} className="card-img-top img-fluid mt-1" alt="..." style={{ width: "25rem", height: "13rem", border: "1px solid black" }} /> */}
                <div className="card-body">
                    <h5 className="card-title text-center mb-0">{props.projectName}</h5>
                    <p className="card-text mt-0">{props.description}</p>
                </div>
                <div>
                    <Link to={props.websiteURL} className="btn btn-primary m-3" target="_blank"><i className="bi bi-globe bg-black"></i>Visit Website</Link>
                    <Link to={props.githubURL} className="btn btn-primary" target="_blank"><i className="bi bi-github"></i>Visit Github</Link>
                </div>
            </div>

        </>
    )
}
import React from "react";
import { Outlet, Link } from "react-router-dom"

export default function HeaderNavigation() {
    return (
        <>
            <div className="container-fluid">
                <div className="row">

                    <nav className="navbar navbar-expand-lg bg-body-primary navbar bg-primary border-bottom border-bottom-primary">
                        <div className="container-fluid">
                            <a className="navbar-brand text-light fw-bold text-uppercase" href="/">Portfolio Website</a>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav mx-5 mb-2 mb-lg-0">
                                    <li className="nav-item"><Link to="/" className="nav-link text-light">HOME</Link></li>
                                    <li className="nav-item"><Link to="/project" className="nav-link text-light">PROJECTS</Link></li>
                                    <li className="nav-item"><Link to="/certifications" className="nav-link text-light">CERTIFICATIONS</Link></li>
                                    <li className="nav-item"><Link to="/education" className="nav-link text-light">EDUCATION</Link></li>
                                    <li className="nav-item"><Link to="/experience" className="nav-link text-light">EXPERIENCE</Link></li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </>
    )
}
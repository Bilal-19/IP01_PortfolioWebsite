import React from "react";
import { Outlet, Link } from "react-router-dom"

export default function HeaderNavigation() {
    return (
        <>
            <div className="container-fluid">
                <div className="row">

                    <nav className="navbar navbar-expand-lg bg-body-tertiary navbar bg-dark border-bottom border-bottom-dark" data-bs-theme="dark">
                        <div className="container-fluid">
                            <a className="navbar-brand" href="#">Portfolio Website</a>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav mx-5 mb-2 mb-lg-0">
                                    <li className="nav-item"><Link to="/" className="nav-link">HOME</Link></li>
                                    <li className="nav-item"><Link to="/about" className="nav-link">ABOUT</Link></li>
                                    <li className="nav-item"><Link to="/project" className="nav-link">PROJECT</Link></li>
                                    <li className="nav-item"><Link to="/certifications" className="nav-link">CERTIFICATIONS</Link></li>
                                    <li className="nav-item"><Link to="/contact" className="nav-link">CONTACT</Link></li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </>
    )
}
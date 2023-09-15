import React from "react";
import HeaderNavigation from "../Components/header";

export default function Homepage() {
    return (
        <>
            <HeaderNavigation />
            <div className="container-fluid mt-2">
                <div className="row">
                    <div className="col-md-12">
                        <div className="card mx-auto border-primary" style={{ width: '22rem' }}>
                            <img className="card-img-top mt-2 mx-auto" src={'https://images.unsplash.com/photo-1618477388954-7852f32655ec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1528&q=80'} style={{ borderRadius: "50%", height: "200px", width: '200px' }} />
                            <div className="card-title">
                                <p className="card-text text-center fw-bold text-uppercase h5">Bilal Muhammad Yousuf</p>
                                <p className="card-text fw-bold mx-2 mb-0 mt-2 pb-0">ABOUT ME</p>
                                <p className="card-text mx-2 mt-0 pt-0">
                                    I'm a <b>Graduate Software Engineer</b> & a <b>Frontend Developer</b> having expertise in
                                    HTML, CSS, BootStrap, JavaScript, React JS and Git.
                                </p>

                                <p className="card-text fw-bold mx-2 mb-0 mt-2">EXPERTISE</p>
                                <p className="card-text mx-2 mt-0">
                                    I have done certifications related to Web Development from LinkedIn Learning.
                                    Additionally, I worked with different companies as a <b>Frontend Developer & Web Developer Intern</b> and complete <b>12+</b> projects.

                                </p>

                                <p className="card-text fw-bold mx-2 mb-0 mt-2">LET'S KEEP IN TOUCH!</p>
                                <a className="btn btn-outline-primary mx-2 mx-1" href="mailto:bilalmuhammadyousuf543@gmail.com" target="_blank"><i className="fa fa-envelope mx-1"></i>Email</a>
                                <a className="btn btn-outline-primary mx-2" href="https://www.linkedin.com/in/bilal-muhammad-yousuf-20b533190/" target="_blank"><i className="fa fa-linkedin mx-1"></i>LinkedIn</a>
                                <a className="btn btn-outline-primary mx-2" href="https://github.com/Bilal-19" target="_blank"><i className="fa fa-github mx-1"></i>GitHub</a>
                            </div>
                        </div>


                    </div>
                </div>
            </div >
        </>
    )
}
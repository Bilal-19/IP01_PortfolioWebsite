import React from "react";
import HeaderNavigation from "../Components/header";

export default function Homepage() {
    return (
        <>
            <HeaderNavigation />
            <div className="container-fluid mt-4">
                <div className="row">
                    <div className="col-md-12">
                        <div className="card mx-auto" style={{ width: '26rem' }}>
                            <img className="card-img-top mt-2 mx-auto" src={"https://images.unsplash.com/photo-1522252234503-e356532cafd5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=725&q=80"} style={{ borderRadius: "50%", height: "200px", width: '200px' }} />
                            <div className="card-title">
                                <p className="card-text text-center fw-bold">Bilal Muhammad Yousuf</p>
                                <p className="card-text fw-bold mx-2 mb-0 mt-2 pb-0">ABOUT ME</p>
                                <p className="card-text mx-2 mt-0 pt-0">
                                    I'm a <b>Graduate Software Engineer</b> & a <b>Frontend Developer</b> having expertise in
                                    HTML, CSS, BootStrap, JavaScript, React JS and GIT.
                                </p>

                                <p className="card-text fw-bold mx-2 mb-0 mt-2">EXPERTISE</p>
                                <p className="card-text mx-2 mt-0">
                                    I have done certifications related to Web Development from LinkedIn Learning.
                                    Additionally, I worked with different companies as a <b>Frontend Developer & Web Developer Intern</b> and complete <b>12+</b> projects.

                                </p>

                                <p className="card-text fw-bold mx-2 mb-0 mt-2">CONTACT</p>
                                <button className="btn btn-primary mx-2">Gmail</button>
                                <button className="btn btn-primary">LinkedIn</button>
                                <button className="btn btn-primary mx-2">Medium</button>
                            </div>
                        </div>


                    </div>
                </div>
            </div >
        </>
    )
}
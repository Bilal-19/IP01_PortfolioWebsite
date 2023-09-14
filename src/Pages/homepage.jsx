import React from "react";
import HeaderNavigation from "../Components/header";

export default function Homepage() {
    return (
        <>
            <HeaderNavigation />
            <div className="container-fluid mt-4">
                <div className="row">
                    <div className="col-md-5">
                        <p>
                            My name is <b>Bilal Muhammad Yousuf</b>. I'm a <b>Graduate Software Engineer</b> & a <b>Frontend Developer</b> having expertise in:
                            <ul className="text-start mx-5">
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>BootStrap 5</li>
                                <li>JavaScript</li>
                                <li>React JS</li>
                                <li>Git</li>
                            </ul>
                            I have done certifications related to Web Development from LinkedIn Learning.
                            Additionally, I worked with different companies as a <b>Frontend Developer & Web Developer Intern</b> and complete <b>12+</b> projects.
                            <br />
                            <br />
                            Explore my portfolio to witness a collection of projects that showcase my dedication to frontend development and passion for creating innovative digital solutions.
                            Let's collaborate to transform your ideas into reality and build exceptional web experiences together!

                        </p>




                    </div>

                    <div className="col-md-7">
                        <img src={"https://images.unsplash.com/photo-1522252234503-e356532cafd5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=725&q=80"} height='500px' width='500px'
                            style={{ borderRadius: "50%" }}
                        ></img>
                    </div>
                </div>
            </div >
        </>
    )
}
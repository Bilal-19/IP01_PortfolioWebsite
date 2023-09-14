import React from "react";
import HeaderNavigation from "../Components/header";

export default function Homepage() {
    return (
        <>
            <HeaderNavigation />
            <div className="container-fluid mt-4">
                <div className="row">
                    <div className="col-md-5">
                        <p className="text-center">                            A proficient Frontend Developer, skilled in HTML, CSS, JavaScript, Bootstrap 5, and React.js.
                        </p>

                        <p className="text-center">
                            With prior experience as a Web Developer Intern at The Sparks Foundation and a Frontend Developer Intern at Interns Pakistan, I bring a wealth of hands-on expertise to every project I undertake.
                        </p>

                        <p className="text-center">
                            My focus is on crafting captivating web experiences that seamlessly blend design and functionality. With an eye for detail and a commitment to excellence, I strive to deliver user-centric solutions that leave a lasting impression.
                        </p>

                        <p className="text-center">
                            Explore my portfolio to witness a collection of projects that showcase my dedication to frontend development and passion for creating innovative digital solutions.
                            Let's collaborate to transform your ideas into reality and build exceptional web experiences together!
                        </p>
                    </div>

                    <div className="col-md-7">
                        <img src={"https://images.unsplash.com/photo-1522252234503-e356532cafd5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=725&q=80"}></img>
                    </div>
                </div>
            </div>
        </>
    )
}
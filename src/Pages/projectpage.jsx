import React from "react";
import HeaderNavigation from "../Components/header";
import ProjectCard from "../Components/projectCard";
import { previuosProjects } from "../Database/projectdb";


export default function ProjectPage() {
    const newItems = previuosProjects.map((item) => {
        return (
            <ProjectCard key={item.id} {...item} />
        )

    })
    return (
        <>
            <HeaderNavigation />


            <div className="container-fluid">

                <div className="row">
                    <i className="text-center h4">FEATURE PROJECTS</i>
                </div>

                <div className="row">
                    {
                        previuosProjects.map((item) => {
                            return (
                                <ProjectCard key={item.id} {...item} />
                            )

                        })
                    }
                </div>
            </div>

        </>
    )
}
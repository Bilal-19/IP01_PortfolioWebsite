import HeaderNavigation from "../Components/header";
import { ExperienceData } from "../Database/experienceData";

import React from 'react'

export default function ExperiencePage() {
    return (
        <>
            <HeaderNavigation />


            <div className="container-fluid">

                <div className="row">
                    <i className="text-center text-uppercase h4 fw-bold fw-italic">Professional Experience</i>
                </div>
                <div className="row">

                    {
                        ExperienceData.map((item, i) => {
                            return (
                                <>
                                    <div className="card m-2" style={{ width: '19rem' }}>
                                        <p className="card-text mb-1 fw-bold h5 text-uppercase text-center">{item.companyName}</p>
                                        <p className="card-text mb-0"><b>Role: </b>{item.role}</p>
                                        <p className="card-text mb-4"><b>Achievment: </b>
                                            <br />
                                            {item.achievment}</p>
                                    </div>
                                </>
                            )
                        })
                    }
                </div>
            </div >
        </>
    )
}

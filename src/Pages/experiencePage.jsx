import HeaderNavigation from "../Components/header";
import { ExperienceData } from "../Database/experienceData";

import React from 'react'

export default function ExperiencePage() {
    return (
        <>
            <HeaderNavigation />


            <div className="container-fluid">

                <div className="row">
                    <i className="text-center h4">PROFESSIONAL EXPERIENCE</i>
                </div>

                <div className="row">

                    {
                        ExperienceData.map((item, i) => {
                            return (
                                <>
                                    <div className="card m-3" style={{ width: '19rem' }}>
                                        <p className="card-text mb-1 fw-bold h5 text-uppercase text-center pt-1">{item.companyName}</p>
                                        <p className="card-text mb-0"><b>Role: </b>{item.role}</p>
                                        <p className="card-text mb-0"><b>Achievment: </b>
                                            <br />
                                            {item.achievment}
                                        </p>
                                        <p className="card-text mb-2 mt-0 fw-bold">📅 {item.duration}</p>
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

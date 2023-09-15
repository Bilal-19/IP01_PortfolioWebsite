import React from 'react'
import HeaderNavigation from '../Components/header'
import { educationData } from '../Database/educationData'

export default function EducationPage() {
    return (
        <>
            <HeaderNavigation />

            <div className="container-fluid">
                <div className="row">
                    <p className='text-center text-uppercase h4'>Education</p>
                </div>

                <div className="row">

                    {
                        educationData.map(
                            (item, i) => {
                                return (
                                    <>
                                        <div className="card-body" style={{ width: '26rem' }} key={item.id}>
                                            <p className='mx-2 text-uppercase fw-bold mb-0'>{item.sourceOfEducation}</p>
                                            <p className="card-title mx-2 text-capitalized mt-0 fw-bold">{item.educationName}</p>
                                            {item.skills ? <p className='mx-2 mb-0'><strong>Learning Outcome:</strong> <br /> {item.skills}</p> : null}
                                            <p className='mb-5 mx-2'>📅 {item.timePeriod}</p>
                                        </div >
                                    </>
                                )
                            }
                        )
                    }

                </div>
            </div >
        </>
    )
}

import React from "react";
import HeaderNavigation from "../Components/header";
import Certificate from "../Components/certificate";

export default function AchievmentPage() {
    return (
        <>
            <HeaderNavigation />

            <div className="container-fluid">
                <div className="row">

                    <Certificate />
                </div>
            </div>

        </>
    )
}
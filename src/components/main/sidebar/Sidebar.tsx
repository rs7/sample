import React from "react";
import {ProjectLinksGroup} from "../../common/interfaceElements/navigation/ProjectLinksGroup";
import {ProgramLinksGroup} from "../../common/interfaceElements/navigation/ProgramLinksGroup";
import {PortfolioLinksGroup} from "../../common/interfaceElements/navigation/PortfolioLinksGroup";

export function Sidebar() {
    return (
        <>
            <ProjectLinksGroup/>
            <ProgramLinksGroup/>
            <PortfolioLinksGroup/>
        </>
    );
}
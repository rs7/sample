import React, {useState} from "react";
import {canEditProject} from "../../../auth/Auth";
import {ProjectID} from "../../../model/common/project/Project";
import {SpecificProject} from "../../../model/new/project/SpecificProject";
import {api} from "../../../service/api/api";
import {changesApi} from "../../../service/api/changesApi";
import {useComponentDidMount} from "../../../utils/react-helper";
import {CenteredLoader} from "../../common/interfaceElements/InterfaceBlocks";
import {MultiModeContainer} from "../../../entity/MultiModeContainer";
import {ProjectDetails} from "./ProjectDetails";

interface Props {
    id: ProjectID;
}

export function ProjectDetailsWrapper({id}: Props) {
    let [project, setProject] = useState<SpecificProject>();

    useComponentDidMount(async () => {
        setProject(await api.getProjectDetails(id));
    });

    let onChange = async (value: SpecificProject) => {
        setProject(undefined);
        await changesApi.saveChanges(project, value);
        setProject(value);
    };

    let canEdit = canEditProject();

    if (!project) return <CenteredLoader/>;

    return (
        <MultiModeContainer value={project} onChange={onChange} canEdit={canEdit}>
            {ProjectDetails}
        </MultiModeContainer>
    );
}

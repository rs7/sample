import React from "react";
import {ITFProject} from "../../../../model/new/project/specific/ITFProject";
import {
    ItServicesAttributeField,
    ProjectsCriteriaListAttributeField,
    UserListAttributeField
} from "../../../attribute/dictionary/AttributeField";
import {StringAttributeField} from "../../../attribute/simple/AttributeField";
import {InnerCard} from "../../../common/attributes/container/InnerCard";
import {createPartialChange} from "../../../../entity/editor/PartialOnChange";
import {ProjectProps} from "../../ProjectProps";

export function ITFProjectDetails({value, onChange}: ProjectProps<ITFProject>) {
    let onPartialChange = createPartialChange(value, onChange);

    return <>
        <InnerCard>
            <ItServicesAttributeField
                title={`Информационный сервис`}
                value={value.itservices}
                onChange={itservices => onPartialChange({itservices})}
            />

            <UserListAttributeField
                title={`Проектная команда`}
                value={value.project_teams}
                onChange={project_teams => onPartialChange({project_teams})}
            />

            <ProjectsCriteriaListAttributeField
                title={`Критерии проекта`}
                value={value.projects_criteria}
                onChange={projects_criteria => onPartialChange({projects_criteria})}
            />

            <StringAttributeField
                title={`Описание проекта`}
                value={value.description2}
                onChange={description2 => onPartialChange({description2})}
            />

            <StringAttributeField
                title={`Результат проекта`}
                value={value.project_result}
                onChange={project_result => onPartialChange({project_result})}
            />
        </InnerCard>
    </>;

}

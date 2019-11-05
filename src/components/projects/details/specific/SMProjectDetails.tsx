import React from "react";
import {SMProject} from "../../../../model/new/project/specific/SMProject";
import {ProjectsCriteriaListAttributeField} from "../../../attribute/dictionary/AttributeField";
import {StringAttributeField} from "../../../attribute/simple/AttributeField";
import {InnerCard} from "../../../common/attributes/container/InnerCard";
import {createPartialChange} from "../../../../entity/editor/PartialOnChange";
import {ProjectProps} from "../../ProjectProps";

export function SMProjectDetails({value, onChange}: ProjectProps<SMProject>) {
    let onPartialChange = createPartialChange(value, onChange);

    return <>
        <InnerCard>
            <ProjectsCriteriaListAttributeField
                title={`Критерий успешности`}
                value={value.projects_criteria}
                onChange={projects_criteria => onPartialChange({projects_criteria})}
            />

            <StringAttributeField
                title={`Описание проекта`}
                value={value.project_description}
                onChange={project_description => onPartialChange({project_description})}
            />
        </InnerCard>
    </>;

}

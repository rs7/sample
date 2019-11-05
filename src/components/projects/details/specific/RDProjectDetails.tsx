import React from "react";
import {RDProject} from "../../../../model/new/project/specific/RDProject";
import {ProjectCriteriaListAttributeField} from "../../../attribute/composite/AttributeField";
import {StringAttributeField} from "../../../attribute/simple/AttributeField";
import {InnerCard} from "../../../common/attributes/container/InnerCard";
import {createPartialChange} from "../../../../entity/editor/PartialOnChange";
import {ProjectProps} from "../../ProjectProps";

export function RDProjectDetails({value, onChange}: ProjectProps<RDProject>) {
    let onPartialChange = createPartialChange(value, onChange);

    return <>
        <InnerCard>
            <StringAttributeField
                title={`Описание проекта`}
                value={value.project_description}
                onChange={project_description => onPartialChange({project_description})}
            />
        </InnerCard>

        <ProjectCriteriaListAttributeField
            title={`Критерии`}
            value={value.project_criteria}
            onChange={project_criteria => onPartialChange({project_criteria})}
        />
    </>;
}

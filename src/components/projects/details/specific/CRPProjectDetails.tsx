import React from "react";
import {CRPProject} from "../../../../model/new/project/specific/CRPProject";
import {ProjectCriteriaListAttributeField} from "../../../attribute/composite/AttributeField";
import {InnerCard} from "../../../common/attributes/container/InnerCard";
import {createPartialChange} from "../../../../entity/editor/PartialOnChange";
import {ProjectProps} from "../../ProjectProps";

export function CRPProjectDetails({value, onChange}: ProjectProps<CRPProject>) {
    let onPartialChange = createPartialChange(value, onChange);

    return <>
        <InnerCard>
            <ProjectCriteriaListAttributeField
                title={`Критерии успеха`}
                value={value.projects_criteria}
                onChange={projects_criteria => onPartialChange({projects_criteria})}
            />
        </InnerCard>
    </>;
}

import React from "react";
import {HRProject} from "../../../../model/new/project/specific/HRProject";
import {ProjectsCriteriaListAttributeField} from "../../../attribute/dictionary/AttributeField";
import {InnerCard} from "../../../common/attributes/container/InnerCard";
import {createPartialChange} from "../../../../entity/editor/PartialOnChange";
import {ProjectProps} from "../../ProjectProps";

export function HRProjectDetails({value, onChange}: ProjectProps<HRProject>) {
    let onPartialChange = createPartialChange(value, onChange);

    return <>
        <InnerCard>
            <ProjectsCriteriaListAttributeField
                title={`Критерии успеха`}
                value={value.projects_criteria}
                onChange={projects_criteria => onPartialChange({projects_criteria})}
            />
        </InnerCard>
    </>;

}

import React from "react";
import {PRODProject} from "../../../../model/new/project/specific/PRODProject";
import {ProjectsCriteriaListAttributeField} from "../../../attribute/dictionary/AttributeField";
import {StringAttributeField} from "../../../attribute/simple/AttributeField";
import {InnerCard} from "../../../common/attributes/container/InnerCard";
import {createPartialChange} from "../../../../entity/editor/PartialOnChange";
import {ProjectProps} from "../../ProjectProps";

export function PRODProjectDetails({value, onChange}: ProjectProps<PRODProject>) {
    let onPartialChange = createPartialChange(value, onChange);

    return <>
        <InnerCard>
            <ProjectsCriteriaListAttributeField
                title={`Критерии`}
                value={value.projects_criteria}
                onChange={projects_criteria => onPartialChange({projects_criteria})}
            />

            <StringAttributeField
                title={`Описание проекта`}
                value={value.description2}
                onChange={description2 => onPartialChange({description2})}
            />
        </InnerCard>
    </>;

}

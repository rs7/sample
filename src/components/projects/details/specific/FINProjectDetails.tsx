import React from "react";
import {FINProject} from "../../../../model/new/project/specific/FINProject";
import {ProjectsCriteriaListAttributeField} from "../../../attribute/dictionary/AttributeField";
import {StringAttributeField} from "../../../attribute/simple/AttributeField";
import {InnerCard} from "../../../common/attributes/container/InnerCard";
import {createPartialChange} from "../../../../entity/editor/PartialOnChange";
import {ProjectProps} from "../../ProjectProps";

export function FINProjectDetails({value, onChange}: ProjectProps<FINProject>) {
    let onPartialChange = createPartialChange(value, onChange);

    return <>
        <InnerCard>
            <ProjectsCriteriaListAttributeField
                title={`Критерий успешности`}
                value={value.criteria}
                onChange={criteria => onPartialChange({criteria})}
            />

            <StringAttributeField
                title={`Описание`}
                value={value.description2}
                onChange={description2 => onPartialChange({description2})}
            />
        </InnerCard>
    </>;

}

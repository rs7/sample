import React from "react";
import {DISUPProject} from "../../../../model/new/project/specific/DISUPProject";
import {StageAttributeField} from "../../../attribute/dictionary/AttributeField";
import {StringAttributeField} from "../../../attribute/simple/AttributeField";
import {InnerCard} from "../../../common/attributes/container/InnerCard";
import {createPartialChange} from "../../../../entity/editor/PartialOnChange";
import {ProjectProps} from "../../ProjectProps";

export function DISUPProjectDetails({value, onChange}: ProjectProps<DISUPProject>) {
    let onPartialChange = createPartialChange(value, onChange);

    return <>
        <InnerCard>
            <StringAttributeField
                title={`Направление`}
                value={value.area}
                onChange={area => onPartialChange({area})}
            />

            <StageAttributeField
                title={`Стадия`}
                value={value.stage}
                onChange={stage => onPartialChange({stage})}
            />
        </InnerCard>
    </>;
}

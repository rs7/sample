import React from "react";
import {RNAProject} from "../../../../model/new/project/specific/RNAProject";
import {InteractionListAttributeField} from "../../../attribute/composite/AttributeField";
import {createPartialChange} from "../../../../entity/editor/PartialOnChange";
import {ProjectProps} from "../../ProjectProps";

export function RNAProjectDetails({value, onChange}: ProjectProps<RNAProject>) {
    let onPartialChange = createPartialChange(value, onChange);

    return <>
        <InteractionListAttributeField
            title={`Молекулярное действие препарата`}
            value={value.interactions}
            onChange={interactions => onPartialChange({interactions})}
        />
    </>;
}

import React from "react";
import {CARTProject} from "../../../../model/new/project/specific/CARTProject";
import {InteractionListAttributeField} from "../../../attribute/composite/AttributeField";
import {createPartialChange} from "../../../../entity/editor/PartialOnChange";
import {ProjectProps} from "../../ProjectProps";

export function CARTProjectDetails({value, onChange}: ProjectProps<CARTProject>) {
    let onPartialChange = createPartialChange(value, onChange);

    return <>
        <InteractionListAttributeField
            title={`Молекулярное действие препарата`}
            value={value.interactions}
            onChange={interactions => onPartialChange({interactions})}
            addButtonLabel={'Добавить молекулярное действие препарата'}
        />
    </>;
}

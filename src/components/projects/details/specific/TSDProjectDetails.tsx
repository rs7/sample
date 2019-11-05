import React from "react";
import {TSDProject} from "../../../../model/new/project/specific/TSDProject";
import {TestSystemListAttributeField} from "../../../attribute/composite/AttributeField";
import {createPartialChange} from "../../../../entity/editor/PartialOnChange";
import {ProjectProps} from "../../ProjectProps";

export function TSDProjectDetails({value, onChange}: ProjectProps<TSDProject>) {
    let onPartialChange = createPartialChange(value, onChange);

    return <>
        <TestSystemListAttributeField
            title={`Тест системы`}
            value={value.test_system}
            onChange={test_system => onPartialChange({test_system})}
        />
    </>;
}

import {RadioGroup} from "@vendor/bcd-front-ui-standalone";
import React, {useState} from "react";
import {BooleanAttributeValue} from "../../../../model/attribute/SimpleAttribute";
import {createRadioGroupName} from "../../../../utils/ui";
import {EditorProps} from "../../../../entity/editor/Editor";
import {labelToValue, valueToLabel} from "./BooleanAttributeCommon";

export function BooleanAttributeEditor({value, onChange}: EditorProps<BooleanAttributeValue>) {
    let [radioGroupName] = useState(createRadioGroupName());

    return (
        <RadioGroup
            view={"big"}
            name={radioGroupName}
            options={[
                valueToLabel(true as BooleanAttributeValue),
                valueToLabel(false as BooleanAttributeValue),
            ]}
            value={valueToLabel(value)}
            onChange={value => onChange(labelToValue(value))}
        />
    );
}

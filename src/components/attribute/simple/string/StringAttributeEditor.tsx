import React from "react";
import {StringAttributeValue} from "../../../../model/attribute/SimpleAttribute";
import {Input} from "../../../common/controls/Input";
import {EditorProps} from "../../../../entity/editor/Editor";

export function StringAttributeEditor({value, onChange}: EditorProps<StringAttributeValue>) {
    return (
        <Input
            value={value || ""}
            onChange={value => onChange(value as StringAttributeValue)}
            type={"text"}
        />
    );
}

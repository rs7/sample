import React from "react";
import {IntegerAttributeValue} from "../../../../model/attribute/SimpleAttribute";
import {Input} from "../../../common/controls/Input";
import {EditorProps} from "../../../../entity/editor/Editor";
import {EditorConverter} from "../../../../entity/editor/EditorConverter";

export function IntegerAttributeEditor({value, onChange}: EditorProps<IntegerAttributeValue>) {
    return (
        <EditorConverter value={value} onChange={onChange} inToOut={from} outToIn={to}>
            {
                ({value, onChange}) => (
                    <Input
                        value={value}
                        onChange={onChange}
                        type={"number"}
                    />
                )
            }
        </EditorConverter>

    );
}

function from(value: string): IntegerAttributeValue {
    return parseInt(value) as IntegerAttributeValue;
}

function to(value: IntegerAttributeValue): string {
    return value.toString();
}

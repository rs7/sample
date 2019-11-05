import React from "react";
import {Sequence} from "../../../../model/new/nested/Sequence";
import {PartialEditorProps} from "../../../../entity/editor/PartialEditor";
import {StringAttributeField} from "../../simple/AttributeField";

export function SequencePartial({value, onPartialChange}: PartialEditorProps<Sequence>) {
    return <>
        <StringAttributeField
            title={`Последовательность`}
            value={value.sequence}
            onChange={sequence => onPartialChange({sequence})}
        />

        <StringAttributeField
            title={`Описание последовательности`}
            value={value.title}
            onChange={title => onPartialChange({title})}
        />
    </>;
}

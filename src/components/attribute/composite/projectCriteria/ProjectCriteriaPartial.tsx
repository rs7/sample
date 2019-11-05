import React from "react";
import {Criteria} from "../../../../model/new/nested/Criteria";
import {PartialEditorProps} from "../../../../entity/editor/PartialEditor";
import {StringAttributeField} from "../../simple/AttributeField";

export function ProjectCriteriaPartial({value, onPartialChange}: PartialEditorProps<Criteria>) {
    return <>
        <StringAttributeField
            title={`Описание`}
            value={value.title}
            onChange={title => onPartialChange({title})}
        />
    </>;
}

import React from "react";
import {Interaction} from "../../../../model/new/nested/Interaction";
import {PartialEditorProps} from "../../../../entity/editor/PartialEditor";
import {useValidation} from "../../../../valid/Validation";
import {BindingAttributeField} from "../../dictionary/AttributeField";
import {StringAttributeField} from "../../simple/AttributeField";
import {TargetListAttributeField} from "../AttributeField";

export function InteractionPartial({value, onPartialChange}: PartialEditorProps<Interaction>) {
    let validation = useValidation();

    return <>
        <StringAttributeField
            title={`Наименование`}
            value={value.title}
            onChange={title => onPartialChange({title})}
        />

        <BindingAttributeField
            title={`Направление воздействия препарата`}
            value={value.binding}
            onChange={binding => onPartialChange({binding})}
        />

        <TargetListAttributeField
            title={`Список мишеней`}
            value={value.targets}
            onChange={targets => onPartialChange({targets})}
            addButtonLabel={'Добавить мишень'}
        />
    </>;
}

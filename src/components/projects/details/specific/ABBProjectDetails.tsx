import React from "react";
import {ABBProject} from "../../../../model/new/project/specific/ABBProject";
import {InteractionListAttributeField} from "../../../attribute/composite/AttributeField";
import {BinderTypeListAttributeField} from "../../../attribute/dictionary/AttributeField";
import {InnerCard} from "../../../common/attributes/container/InnerCard";
import {createPartialChange} from "../../../../entity/editor/PartialOnChange";
import {ProjectProps} from "../../ProjectProps";

export function ABBProjectDetails({value, onChange}: ProjectProps<ABBProject>) {
    let onPartialChange = createPartialChange(value, onChange);

    let validation = useValidation();

    return <>
        <InnerCard>
            <BinderTypeListAttributeField
                title={`Тип антиген-связывающей части антитела`}
                value={value.binder_type2}
                onChange={binder_type2 => onPartialChange({binder_type2})}
            />
        </InnerCard>

        <InteractionListAttributeField
            title={`Молекулярное действие препарата`}
            value={value.targets2}
            onChange={targets2 => onPartialChange({targets2})}
            addButtonLabel={'Добавить молекулярное действие препарата'}
            validation={[validation.NotNullValidator]}
        />
    </>;
}

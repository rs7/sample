import React from "react";
import {ESProject} from "../../../../model/new/project/specific/ESProject";
import {LimsDepartmentsAttributeField, Manufacturer_2_2AttributeField, WorkTypeAttributeField} from "../../../attribute/dictionary/AttributeField";
import {StringAttributeField} from "../../../attribute/simple/AttributeField";
import {InnerCard} from "../../../common/attributes/container/InnerCard";
import {createPartialChange} from "../../../../entity/editor/PartialOnChange";
import {ProjectProps} from "../../ProjectProps";

export function ESProjectDetails({value, onChange}: ProjectProps<ESProject>) {
    let onPartialChange = createPartialChange(value, onChange);

    return <>
        <InnerCard>
            <Manufacturer_2_2AttributeField
                title={`Локация`}
                value={value.manufacturer}
                onChange={manufacturer => onPartialChange({manufacturer})}
            />

            <LimsDepartmentsAttributeField
                title={`Пользователь системы (подразделение)`}
                value={value.department}
                onChange={department => onPartialChange({department})}
            />

            <StringAttributeField
                title={`Наименование системы согласно URS`}
                value={value.name_URS}
                onChange={name_URS => onPartialChange({name_URS})}
            />

            <WorkTypeAttributeField
                title={`Тип работ`}
                value={value.workType}
                onChange={workType => onPartialChange({workType})}
            />
        </InnerCard>
    </>;

}

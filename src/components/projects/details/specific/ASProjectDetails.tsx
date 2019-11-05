import React from "react";
import {ASProject} from "../../../../model/new/project/specific/ASProject";
import {LimsDepartmentsAttributeField, SystemTypeAttributeField, UserAttributeField, WorkTypeAttributeField} from "../../../attribute/dictionary/AttributeField";
import {BooleanAttributeField, StringAttributeField} from "../../../attribute/simple/AttributeField";
import {InnerCard} from "../../../common/attributes/container/InnerCard";
import {createPartialChange} from "../../../../entity/editor/PartialOnChange";
import {ProjectProps} from "../../ProjectProps";

export function ASProjectDetails({value, onChange}: ProjectProps<ASProject>) {
    let onPartialChange = createPartialChange(value, onChange);

    return <>
        <InnerCard>
            <BooleanAttributeField
                title={`Необходимость квалификационных/валидационных мероприятий`}
                value={value.events}
                onChange={events => onPartialChange({events})}
            />

            <UserAttributeField
                title={`Представитель департамента`}
                value={value.user}
                onChange={user => onPartialChange({user})}
            />

            <LimsDepartmentsAttributeField
                title={`Клиент (подразделение) Пользователь системы`}
                value={value.department2}
                onChange={department2 => onPartialChange({department2})}
            />

            <LimsDepartmentsAttributeField
                title={`Подразделение, осуществляющие ТОиР`}
                value={value.department}
                onChange={department => onPartialChange({department})}
            />

            <SystemTypeAttributeField
                title={`Тип системы`}
                value={value.system_Type}
                onChange={system_Type => onPartialChange({system_Type})}
            />

            <WorkTypeAttributeField
                title={`Тип работ`}
                value={value.workType}
                onChange={workType => onPartialChange({workType})}
            />

            <StringAttributeField
                title={`Наименование системы согласно URS`}
                value={value.name}
                onChange={name => onPartialChange({name})}
            />
        </InnerCard>
    </>;
}

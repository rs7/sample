import React from "react";
import {MABProject} from "../../../../model/new/project/specific/MABProject";
import {FcTypeAttributeField, FormatAbAttributeField, FusionListAttributeField, UserAttributeField} from "../../../attribute/dictionary/AttributeField";
import {InnerCard} from "../../../common/attributes/container/InnerCard";
import {createPartialChange} from "../../../../entity/editor/PartialOnChange";
import {ProjectProps} from "../../ProjectProps";

export function MABProjectDetails({value, onChange}: ProjectProps<MABProject>) {
    let onPartialChange = createPartialChange(value, onChange);

    return <>
        <InnerCard>
            <FormatAbAttributeField
                title={`Формат антитела`}
                value={value.format_ab}
                onChange={format_ab => onPartialChange({format_ab})}
            />

            <FcTypeAttributeField
                title={`Тип Fc фрагмента`}
                value={value.fc_type}
                onChange={fc_type => onPartialChange({fc_type})}
            />

            <UserAttributeField
                title={`Сотрудник ОФП`}
                value={value.managerOFP}
                onChange={managerOFP => onPartialChange({managerOFP})}
            />

            <FusionListAttributeField
                title={`Пришивки`}
                value={value.fusion_mab}
                onChange={fusion_mab => onPartialChange({fusion_mab})}
            />
        </InnerCard>
    </>;
}

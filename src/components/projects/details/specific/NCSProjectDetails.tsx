import React from "react";
import {NCSProject} from "../../../../model/new/project/specific/NCSProject";
import {LimsCountryAttributeField, Nosologies_ICDAttributeField, PhaseDkiAttributeField, ResearchCentreAttributeField, TrialGroupsNcsListAttributeField} from "../../../attribute/dictionary/AttributeField";
import {InnerCard} from "../../../common/attributes/container/InnerCard";
import {createPartialChange} from "../../../../entity/editor/PartialOnChange";
import {ProjectProps} from "../../ProjectProps";

export function NCSProjectDetails({value, onChange}: ProjectProps<NCSProject>) {
    let onPartialChange = createPartialChange(value, onChange);

    return <>
        <InnerCard>
            <TrialGroupsNcsListAttributeField
                title={`Тип ДКИ с исследов группами`}
                value={value.dki_type_trial_groups}
                onChange={dki_type_trial_groups => onPartialChange({dki_type_trial_groups})}
            />

            <Nosologies_ICDAttributeField
                title={`Показания по МКБ`}
                value={value.Nosologies_ICD}
                onChange={Nosologies_ICD => onPartialChange({Nosologies_ICD})}
            />

            <PhaseDkiAttributeField
                title={`Фаза ДКИ`}
                value={value.dki_phase}
                onChange={dki_phase => onPartialChange({dki_phase})}
            />

            <ResearchCentreAttributeField
                title={`Исследовательский центр`}
                value={value.research_center}
                onChange={research_center => onPartialChange({research_center})}
            />

            <LimsCountryAttributeField
                title={`Страна`}
                value={value.country}
                onChange={country => onPartialChange({country})}
            />
        </InnerCard>
    </>;

}

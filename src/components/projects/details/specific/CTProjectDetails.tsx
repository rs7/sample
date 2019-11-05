import React from "react";
import {CTProject} from "../../../../model/new/project/specific/CTProject";
import {TrialGroupListAttributeField} from "../../../attribute/composite/AttributeField";
import {CentreClassificationAttributeField, ComparisonsTypeListAttributeField, ControlTypeAttributeField, KiPhaseAttributeField, LimsCountryAttributeField, Nosologies_ICDListAttributeField, ProjectCTAttributeField, TrialTypeAttributeField} from "../../../attribute/dictionary/AttributeField";
import {BooleanAttributeField} from "../../../attribute/simple/AttributeField";
import {InnerCard} from "../../../common/attributes/container/InnerCard";
import {createPartialChange} from "../../../../entity/editor/PartialOnChange";
import {ProjectProps} from "../../ProjectProps";

export function CTProjectDetails({value, onChange}: ProjectProps<CTProject>) {
    let onPartialChange = createPartialChange(value, onChange);

    return <>
        <InnerCard>
            <ComparisonsTypeListAttributeField
                title={`Тип сравнения КИ`}
                value={value.comparisons_type}
                onChange={comparisons_type => onPartialChange({comparisons_type})}
            />

            <BooleanAttributeField
                title={`Иммуногенность`}
                value={value.imunno}
                onChange={imunno => onPartialChange({imunno})}
            />

            <BooleanAttributeField
                title={`Фармакодинамика`}
                value={value.pharma_d}
                onChange={pharma_d => onPartialChange({pharma_d})}
            />

            <BooleanAttributeField
                title={`Фармакокинетика`}
                value={value.pharma_c}
                onChange={pharma_c => onPartialChange({pharma_c})}
            />

            <TrialTypeAttributeField
                title={`Тип КИ`}
                value={value.trial_type}
                onChange={trial_type => onPartialChange({trial_type})}
            />

            <ControlTypeAttributeField
                title={`Степень контроля`}
                value={value.control_type}
                onChange={control_type => onPartialChange({control_type})}
            />

            <KiPhaseAttributeField
                title={value.ki_phase__attrTitle}
                value={value.ki_phase}
                onChange={ki_phase => onPartialChange({ki_phase})}
            />

            <Nosologies_ICDListAttributeField
                title={`Фаза КИ`}
                value={value.Nosologies_ICD}
                onChange={Nosologies_ICD => onPartialChange({Nosologies_ICD})}
            />

            <LimsCountryAttributeField
                title={`Страна`}
                value={value.country}
                onChange={country => onPartialChange({country})}
            />

            <CentreClassificationAttributeField
                title={`По количеству центров`}
                value={value.centre_classification}
                onChange={centre_classification => onPartialChange({centre_classification})}
            />

            <BooleanAttributeField
                title={`Международное`}
                value={value.international}
                onChange={international => onPartialChange({international})}
            />

            <ProjectCTAttributeField
                title={`Связь с другим проектом`}
                value={value.project_CT}
                onChange={project_CT => onPartialChange({project_CT})}
            />
        </InnerCard>

        <TrialGroupListAttributeField
            title={`Исследуемая группа`}
            value={value.trialGroup}
            onChange={trialGroup => onPartialChange({trialGroup})}
        />
    </>;

}

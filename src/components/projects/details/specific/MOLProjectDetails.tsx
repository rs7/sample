import React from "react";
import {MOLProject} from "../../../../model/new/project/specific/MOLProject";
import {InteractionListAttributeField} from "../../../attribute/composite/AttributeField";
import {Manufacturer_2_2AttributeField, MnnAttributeField, Molecule2AttributeField} from "../../../attribute/dictionary/AttributeField";
import {BooleanAttributeField} from "../../../attribute/simple/AttributeField";
import {InnerCard} from "../../../common/attributes/container/InnerCard";
import {createPartialChange} from "../../../../entity/editor/PartialOnChange";
import {ProjectProps} from "../../ProjectProps";

export function MOLProjectDetails({value, onChange}: ProjectProps<MOLProject>) {
    let onPartialChange = createPartialChange(value, onChange);

    return <>
        <InnerCard>
            <BooleanAttributeField
                title={`Является оригинальным препаратом`}
                value={value.original}
                onChange={original => onPartialChange({original})}
            />

            <MnnAttributeField
                title={`Международное непатентованное наименование`}
                value={value.MNN}
                onChange={MNN => onPartialChange({MNN})}
            />

            <Molecule2AttributeField
                title={`Молекула`}
                value={value.molecule_2}
                onChange={molecule_2 => onPartialChange({molecule_2})}
            />

            <Manufacturer_2_2AttributeField
                title={`Производитель`}
                value={value.manufacturer_2}
                onChange={manufacturer_2 => onPartialChange({manufacturer_2})}
            />
        </InnerCard>

        <InteractionListAttributeField
            title={`Молекулярное действие препарата`}
            value={value.interactions}
            onChange={interactions => onPartialChange({interactions})}
        />
    </>;
}

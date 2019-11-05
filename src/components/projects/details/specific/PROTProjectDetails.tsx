import React from "react";
import {PROTProject} from "../../../../model/new/project/specific/PROTProject";
import {SequenceListAttributeField} from "../../../attribute/composite/AttributeField";
import {ErpMNNAttributeField, FusionListAttributeField, Manufacturer_2_2AttributeField} from "../../../attribute/dictionary/AttributeField";
import {BooleanAttributeField, StringAttributeField} from "../../../attribute/simple/AttributeField";
import {InnerCard} from "../../../common/attributes/container/InnerCard";
import {createPartialChange} from "../../../../entity/editor/PartialOnChange";
import {ProjectProps} from "../../ProjectProps";

export function PROTProjectDetails({value, onChange}: ProjectProps<PROTProject>) {
    let onPartialChange = createPartialChange(value, onChange);

    return <>
        <InnerCard>
            <BooleanAttributeField
                title={`Является оригинальным препаратом`}
                value={value.yavlyayetsya}
                onChange={yavlyayetsya => onPartialChange({yavlyayetsya})}
            />

            <ErpMNNAttributeField
                title={`Международное непатентованное наименование`}
                value={value.MNN}
                onChange={MNN => onPartialChange({MNN})}
            />

            <StringAttributeField
                title={`Название нарабатываемого белка`}
                value={value.protein}
                onChange={protein => onPartialChange({protein})}
            />

            <Manufacturer_2_2AttributeField
                title={`Производитель`}
                value={value.manufacturer_2}
                onChange={manufacturer_2 => onPartialChange({manufacturer_2})}
            />

            <FusionListAttributeField
                title={`Пришивки`}
                value={value.fusions}
                onChange={fusions => onPartialChange({fusions})}
            />
        </InnerCard>

        <SequenceListAttributeField
            title={`Нарабатываемая последовательность`}
            value={value.sequence}
            onChange={sequence => onPartialChange({sequence})}
        />
    </>;
}

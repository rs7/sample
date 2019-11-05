import React from "react";
import {TRANSProject} from "../../../../model/new/project/specific/TRANSProject";
import {SerotypeAttributeField, TerapyTypeAttributeField, TransgenesListAttributeField, VectorAttributeField} from "../../../attribute/dictionary/AttributeField";
import {InnerCard} from "../../../common/attributes/container/InnerCard";
import {createPartialChange} from "../../../../entity/editor/PartialOnChange";
import {ProjectProps} from "../../ProjectProps";

export function TRANSProjectDetails({value, onChange}: ProjectProps<TRANSProject>) {
    let onPartialChange = createPartialChange(value, onChange);

    return <>
        <InnerCard>
            <TerapyTypeAttributeField
                title={`Тип терапии`}
                value={value.terapy_type}
                onChange={terapy_type => onPartialChange({terapy_type})}
            />

            <VectorAttributeField
                title={`Вектор доставки`}
                value={value.vector}
                onChange={vector => onPartialChange({vector})}
            />

            <SerotypeAttributeField
                title={`Серотип вируса`}
                value={value.serotype}
                onChange={serotype => onPartialChange({serotype})}
            />

            <TransgenesListAttributeField
                title={`Трансгены`}
                value={value.transgenes}
                onChange={transgenes => onPartialChange({transgenes})}
            />
        </InnerCard>
    </>;
}

import React from "react";
import {TRFProject} from "../../../../model/new/project/specific/TRFProject";
import {Manufacturer_2_2AttributeField, PartnerAttributeField, Transfer_typeAttributeField, TransferFormAttributeField} from "../../../attribute/dictionary/AttributeField";
import {InnerCard} from "../../../common/attributes/container/InnerCard";
import {createPartialChange} from "../../../../entity/editor/PartialOnChange";
import {ProjectProps} from "../../ProjectProps";

export function TRFProjectDetails({value, onChange}: ProjectProps<TRFProject>) {
    let onPartialChange = createPartialChange(value, onChange);

    return <>
        <InnerCard>
            <TransferFormAttributeField
                title={`Форма трансфера`}
                value={value.transferm_form}
                onChange={transferm_form => onPartialChange({transferm_form})}
            />

            <Transfer_typeAttributeField
                title={`Тип трансфера`}
                value={value.transfer_type}
                onChange={transfer_type => onPartialChange({transfer_type})}
            />

            <Manufacturer_2_2AttributeField
                title={value.manufacturer__attrTitle}
                value={value.manufacturer}
                onChange={manufacturer => onPartialChange({manufacturer})}
            />

            <Manufacturer_2_2AttributeField
                title={`Передающая сторона`}
                value={value.manufacturer_2_2}
                onChange={manufacturer_2_2 => onPartialChange({manufacturer_2_2})}
            />

            <PartnerAttributeField
                title={`Партнер`}
                value={value.partner}
                onChange={partner => onPartialChange({partner})}
            />
        </InnerCard>
    </>;
}

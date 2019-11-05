import React from "react";
import {LAUNCHProject} from "../../../../model/new/project/specific/LAUNCHProject";
import {InstructionsListAttributeField, LimsCountryListAttributeField} from "../../../attribute/dictionary/AttributeField";
import {BooleanAttributeField, StringAttributeField} from "../../../attribute/simple/AttributeField";
import {InnerCard} from "../../../common/attributes/container/InnerCard";
import {createPartialChange} from "../../../../entity/editor/PartialOnChange";
import {ProjectProps} from "../../ProjectProps";

export function LAUNCHProjectDetails({value, onChange}: ProjectProps<LAUNCHProject>) {
    let onPartialChange = createPartialChange(value, onChange);

    return <>
        <InnerCard>
            <StringAttributeField
                title={`Препарат`}
                value={value.product}
                onChange={product => onPartialChange({product})}
            />

            <InstructionsListAttributeField
                title={`Показания`}
                value={value.instructions}
                onChange={instructions => onPartialChange({instructions})}
            />

            <LimsCountryListAttributeField
                title={`Страна`}
                value={value.country}
                onChange={country => onPartialChange({country})}
            />

            <BooleanAttributeField
                title={`Первичный запуск препарата на рынке`}
                value={value.first_launch}
                onChange={first_launch => onPartialChange({first_launch})}
            />
        </InnerCard>
    </>;

}

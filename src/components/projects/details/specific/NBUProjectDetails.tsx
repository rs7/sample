import React from "react";
import {NBUProject} from "../../../../model/new/project/specific/NBUProject";
import {BusinessUnitTypeAttributeField, LimsCountryAttributeField} from "../../../attribute/dictionary/AttributeField";
import {InnerCard} from "../../../common/attributes/container/InnerCard";
import {createPartialChange} from "../../../../entity/editor/PartialOnChange";
import {ProjectProps} from "../../ProjectProps";

export function NBUProjectDetails({value, onChange}: ProjectProps<NBUProject>) {
    let onPartialChange = createPartialChange(value, onChange);

    return <>
        <InnerCard>
            <BusinessUnitTypeAttributeField
                title={`Тип представительства`}
                value={value.business_unit_type}
                onChange={business_unit_type => onPartialChange({business_unit_type})}
            />

            <LimsCountryAttributeField
                title={`Страна`}
                value={value.country}
                onChange={country => onPartialChange({country})}
            />
        </InnerCard>
    </>;

}

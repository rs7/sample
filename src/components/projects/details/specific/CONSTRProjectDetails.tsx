import React from "react";
import {CONSTRProject} from "../../../../model/new/project/specific/CONSTRProject";
import {ConstrObjectAttributeField, ConstructionTypeAttributeField, RenovObjectAttributeField} from "../../../attribute/dictionary/AttributeField";
import {StringAttributeField} from "../../../attribute/simple/AttributeField";
import {InnerCard} from "../../../common/attributes/container/InnerCard";
import {createPartialChange} from "../../../../entity/editor/PartialOnChange";
import {ProjectProps} from "../../ProjectProps";

export function CONSTRProjectDetails({value, onChange}: ProjectProps<CONSTRProject>) {
    let onPartialChange = createPartialChange(value, onChange);

    return <>
        <InnerCard>
            <RenovObjectAttributeField
                title={`Реконструируемый объект`}
                value={value.renov_object}
                onChange={renov_object => onPartialChange({renov_object})}
            />

            <StringAttributeField
                title={`Адрес`}
                value={value.adress}
                onChange={adress => onPartialChange({adress})}
            />

            <ConstrObjectAttributeField
                title={`Объект строительства`}
                value={value.constr_object}
                onChange={constr_object => onPartialChange({constr_object})}
            />

            <ConstructionTypeAttributeField
                title={`Вид строительства`}
                value={value.construction_type}
                onChange={construction_type => onPartialChange({construction_type})}
            />
        </InnerCard>
    </>;
}

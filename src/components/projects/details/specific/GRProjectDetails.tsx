import React from "react";
import {GRProject} from "../../../../model/new/project/specific/GRProject";
import {LimsCountryAttributeField} from "../../../attribute/dictionary/AttributeField";
import {StringAttributeField} from "../../../attribute/simple/AttributeField";
import {InnerCard} from "../../../common/attributes/container/InnerCard";
import {createPartialChange} from "../../../../entity/editor/PartialOnChange";
import {ProjectProps} from "../../ProjectProps";

export function GRProjectDetails({value, onChange}: ProjectProps<GRProject>) {
    let onPartialChange = createPartialChange(value, onChange);

    return <>
        <InnerCard>
            <StringAttributeField
                title={`Ссылка на официальное решение регулирующих органов`}
                value={value.link2}
                onChange={link2 => onPartialChange({link2})}
            />

            <StringAttributeField
                title={`Ссылка на предложение для регулирующих органов`}
                value={value.link}
                onChange={link => onPartialChange({link})}
            />

            <StringAttributeField
                title={`Тип нормативного правового акта`}
                value={value.type}
                onChange={type => onPartialChange({type})}
            />

            <LimsCountryAttributeField
                title={`Страна`}
                value={value.country}
                onChange={country => onPartialChange({country})}
            />
        </InnerCard>
    </>;

}

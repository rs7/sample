import React from "react";
import {Referent} from "../../../../model/new/nested/Referent";
import {PartialEditorProps} from "../../../../entity/editor/PartialEditor";
import {LimsCountryAttributeField} from "../../dictionary/AttributeField";
import {StringAttributeField} from "../../simple/AttributeField";

export function ReferentPartial({value, onPartialChange}: PartialEditorProps<Referent>) {
    return <>
        <StringAttributeField
            title={`Ссылка на регистрационное удостоверение на сайте ГРЛС или FDA`}
            value={value.link}
            onChange={link => onPartialChange({link})}
        />

        <LimsCountryAttributeField
            title={`Страна`}
            value={value.country}
            onChange={country => onPartialChange({country})}
        />
    </>;
}

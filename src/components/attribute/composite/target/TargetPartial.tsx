import React from "react";
import {Target} from "../../../../model/new/nested/Target";
import {PartialEditorProps} from "../../../../entity/editor/PartialEditor";
import {EpitopeListAttributeField, IsoformListAttributeField, TargetsDomainsListAttributeField} from "../../dictionary/AttributeField";
import {BooleanAttributeField, StringAttributeField} from "../../simple/AttributeField";

export function TargetPartial({value, onPartialChange}: PartialEditorProps<Target>) {
    return <>
        <StringAttributeField
            title={`Название мишени`}
            value={value.title}
            onChange={title => onPartialChange({title})}
        />

        <BooleanAttributeField
            title={`Место посадки`}
            value={value.place}
            onChange={place => onPartialChange({place})}
        />

        <TargetsDomainsListAttributeField
            title={`Список доменов`}
            value={value.domens}
            onChange={domens => onPartialChange({domens})}
        />

        <IsoformListAttributeField
            title={`Список изоформ`}
            value={value.isoforms2}
            onChange={isoforms2 => onPartialChange({isoforms2})}
        />

        <EpitopeListAttributeField
            title={`Список эпитопов`}
            value={value.epitopes}
            onChange={epitopes => onPartialChange({epitopes})}
        />
    </>;
}

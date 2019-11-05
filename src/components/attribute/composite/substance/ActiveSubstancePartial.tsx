import React from "react";
import {Substance} from "../../../../model/new/nested/Substance";
import {PartialEditorProps} from "../../../../entity/editor/PartialEditor";
import {ConcentrationUnitsAttributeField, VolumesAttributeField} from "../../dictionary/AttributeField";
import {StringAttributeField} from "../../simple/AttributeField";

export function ActiveSubstancePartial({value, onPartialChange}: PartialEditorProps<Substance>) {
    return <>
        <div className={'name'}>
            <StringAttributeField
                title={`Название вещества`}
                value={value.title}
                onChange={title => onPartialChange({title})}
            />
        </div>

        <div className={'concentration'}>
            <ConcentrationUnitsAttributeField
                title={`Ед. концентрации`}
                value={value.concentration}
                onChange={concentration => onPartialChange({concentration})}
            />

            <StringAttributeField
                title={`Значение концентрации`}
                value={value.number}
                onChange={number => onPartialChange({number})}
            />

            <VolumesAttributeField
                title={`Концентрация/Содержание`}
                value={value.volumes}
                onChange={volumes => onPartialChange({volumes})}
            />
        </div>
    </>;
}

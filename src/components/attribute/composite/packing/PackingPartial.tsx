import React from "react";
import {Packing} from "../../../../model/new/nested/Packing";
import {PartialEditorProps} from "../../../../entity/editor/PartialEditor";
import {ERPMeasureUnitsAttributeField, PackingAttributeField, VolumesAttributeField} from "../../dictionary/AttributeField";
import {IntegerAttributeField, StringAttributeField} from "../../simple/AttributeField";

export function PackingPartial({value, onPartialChange}: PartialEditorProps<Packing>) {
    return <>
        <div className={'packing-type'}>
            <VolumesAttributeField
                title={`Фасовка`}
                value={value.volumes}
                onChange={volumes => onPartialChange({volumes})}
            />
        </div>

        <PackingAttributeField
            title={`Первичная упаковка`}
            value={value.packing}
            onChange={packing => onPartialChange({packing})}
        />

        <StringAttributeField
            title={`Значение`}
            value={value.number}
            onChange={number => onPartialChange({number})}
        />

        <ERPMeasureUnitsAttributeField
            title={`ед. измерения`}
            value={value.units}
            onChange={units => onPartialChange({units})}
        />

        <PackingAttributeField
            title={`Вторичная упаковка`}
            value={value.packing2}
            onChange={packing2 => onPartialChange({packing2})}
        />

        <IntegerAttributeField
            title={`Количество`}
            value={value.amount}
            onChange={amount => onPartialChange({amount})}
        />
    </>;
}

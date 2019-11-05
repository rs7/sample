import React from "react";
import {DosageRegimen} from "../../../../model/new/nested/DosageRegimen";
import {PartialEditorProps} from "../../../../entity/editor/PartialEditor";
import {InjectMethodAttributeField, LimsUnitsERPAttributeField, PreparationAttributeField, TimePeriodsAttributeField} from "../../dictionary/AttributeField";
import {IntegerAttributeField, StringAttributeField} from "../../simple/AttributeField";

export function DosageRegimenPartial({value, onPartialChange}: PartialEditorProps<DosageRegimen>) {
    return <>
        <PreparationAttributeField
            title={`Препарат`}
            value={value.preparation}
            onChange={preparation => onPartialChange({preparation})}
        />

        <StringAttributeField
            title={`Наименование`}
            value={value.title2}
            onChange={title2 => onPartialChange({title2})}
        />

        <StringAttributeField
            title={`Ссылка на регистрационное удостоверение на сайте ГРЛС или FDA`}
            value={value.link}
            onChange={link => onPartialChange({link})}
        />

        <StringAttributeField
            title={`Дозировка`}
            value={value.dosage}
            onChange={dosage => onPartialChange({dosage})}
        />

        <LimsUnitsERPAttributeField
            title={`Ед. измерения`}
            value={value.unit}
            onChange={unit => onPartialChange({unit})}
        />

        <IntegerAttributeField
            title={`Режим введения: один раз в`}
            value={value.induction_mode}
            onChange={induction_mode => onPartialChange({induction_mode})}
        />

        <TimePeriodsAttributeField
            title={`Период`}
            value={value.period}
            onChange={period => onPartialChange({period})}
        />

        <IntegerAttributeField
            title={`Продолжительность участия в КИ`}
            value={value.length}
            onChange={length => onPartialChange({length})}
        />

        <TimePeriodsAttributeField
            title={`Период`}
            value={value.period2}
            onChange={period2 => onPartialChange({period2})}
        />

        <InjectMethodAttributeField
            title={`Способ введения`}
            value={value.inject_method}
            onChange={inject_method => onPartialChange({inject_method})}
        />
    </>;
}

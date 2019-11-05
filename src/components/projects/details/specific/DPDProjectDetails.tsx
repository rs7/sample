import React from "react";
import {DPDProject} from "../../../../model/new/project/specific/DPDProject";
import {ReferentListAttributeField, SubstanceListAttributeField} from "../../../attribute/composite/AttributeField";
import {DosageAttributeField, EquipmentItemsAttributeField, ERPMeasureUnitsAttributeField, ErpMNNAttributeField, LimsDirLekPhormaAttributeField, PackagingAfsAttributeField, SpecialMarkingListAttributeField, Storage_conditionListAttributeField, TimePeriodsAttributeField} from "../../../attribute/dictionary/AttributeField";
import {IntegerAttributeField} from "../../../attribute/simple/AttributeField";
import {InnerCard} from "../../../common/attributes/container/InnerCard";
import {createPartialChange} from "../../../../entity/editor/PartialOnChange";
import {ProjectProps} from "../../ProjectProps";

export function DPDProjectDetails({value, onChange}: ProjectProps<DPDProject>) {
    let onPartialChange = createPartialChange(value, onChange);

    return <>
        <InnerCard>
            <ErpMNNAttributeField
                title={`Международное непатентованное наименование`}
                value={value.MNN}
                onChange={MNN => onPartialChange({MNN})}
            />

            <LimsDirLekPhormaAttributeField
                title={`Лекарственная форма`}
                value={value.form}
                onChange={form => onPartialChange({form})}
            />

            <EquipmentItemsAttributeField
                title={`Комплектация`}
                value={value.equipment}
                onChange={equipment => onPartialChange({equipment})}
            />

            <IntegerAttributeField
                title={`Срок годности`}
                value={value.expiration}
                onChange={expiration => onPartialChange({expiration})}
            />

            <TimePeriodsAttributeField
                title={`Выпадающий список`}
                value={value.time}
                onChange={time => onPartialChange({time})}
            />

            <Storage_conditionListAttributeField
                title={`Условия хранения`}
                value={value.Storage_condition}
                onChange={Storage_condition => onPartialChange({Storage_condition})}
            />

            <SpecialMarkingListAttributeField
                title={`Специальная маркировка`}
                value={value.special_marking}
                onChange={special_marking => onPartialChange({special_marking})}
            />

            <DosageAttributeField
                title={`Дозировка`}
                value={value.dosage2}
                onChange={dosage2 => onPartialChange({dosage2})}
            />

            <ERPMeasureUnitsAttributeField
                title={`ед.измерения`}
                value={value.units}
                onChange={units => onPartialChange({units})}
            />

            <PackagingAfsAttributeField
                title={`Первичная упаковка ГЛФ`}
                value={value.packaging}
                onChange={packaging => onPartialChange({packaging})}
            />

            <PackagingAfsAttributeField
                title={`Вторичная упаковка`}
                value={value.packaging2}
                onChange={packaging2 => onPartialChange({packaging2})}
            />

            <IntegerAttributeField
                title={`Фасовка`}
                value={value.packing}
                onChange={packing => onPartialChange({packing})}
            />
        </InnerCard>

        <SubstanceListAttributeField
            title={`Действующее вещество`}
            value={value.activeSubstance}
            onChange={activeSubstance => onPartialChange({activeSubstance})}
        />

        <SubstanceListAttributeField
            title={`Вспомогательные вещества`}
            value={value.auxiliarySubstance}
            onChange={auxiliarySubstance => onPartialChange({auxiliarySubstance})}
        />

        <ReferentListAttributeField
            title={`Тип лекарственной формы ГЛФ`}
            value={value.referent}
            onChange={referent => onPartialChange({referent})}
        />
    </>;
}

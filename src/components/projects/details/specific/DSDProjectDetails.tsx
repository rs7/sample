import React from "react";
import {DSDProject} from "../../../../model/new/project/specific/DSDProject";
import {
    PackingListAttributeField,
    SubstanceListAttributeField
} from "../../../attribute/composite/AttributeField";
import {ChangesDescriptionsListAttributeField, ConcentrationUnitsAttributeField, DevelopmentTypeAttributeField, DosageFormAfsAttributeField, ERPMeasureUnitsAttributeField, LimitingPatentsListAttributeField, LimsDirLekPhormaAttributeField, Manufacturer_2_2AttributeField, PackagingAfsAttributeField, PurposeAttributeField, Storage_conditionListAttributeField, TechnologyKindAttributeField, TimePeriodsAttributeField, VolumesAttributeField} from "../../../attribute/dictionary/AttributeField";
import {BooleanAttributeField, IntegerAttributeField, StringAttributeField} from "../../../attribute/simple/AttributeField";
import {InnerCard} from "../../../common/attributes/container/InnerCard";
import {createPartialChange} from "../../../../entity/editor/PartialOnChange";
import {ProjectProps} from "../../ProjectProps";
import styled from "styled-components";

export function DSDProjectDetails({value, onChange}: ProjectProps<DSDProject>) {
    let onPartialChange = createPartialChange(value, onChange);

    return <>
        <InnerCard>
            <TechnologyWrapper>
                <BooleanAttributeField
                    title={`Наличие технологии`}
                    value={value.technology}
                    onChange={technology => onPartialChange({technology})}
                />

                <TechnologyKindAttributeField
                    title={`Тип техологии`}
                    value={value.technology_kind}
                    onChange={technology_kind => onPartialChange({technology_kind})}
                />
            </TechnologyWrapper>

            <hr/>

            <DevelopmentTypeAttributeField
                title={`Вид разработки`}
                value={value.development_type}
                onChange={development_type => onPartialChange({development_type})}
            />



            <ChangesDescriptionsListAttributeField
                title={`Описание изменений`}
                value={value.changes_description}
                onChange={changes_description => onPartialChange({changes_description})}
            />

            <PurposeAttributeField
                title={`Назначение`}
                value={value.purpose}
                onChange={purpose => onPartialChange({purpose})}
            />

            <IntegerAttributeField
                title={`Срок годности`}
                value={value.expiration_date}
                onChange={expiration_date => onPartialChange({expiration_date})}
            />

            <TimePeriodsAttributeField
                title={`Выпадающий список`}
                value={value.time_periods}
                onChange={time_periods => onPartialChange({time_periods})}
            />

            <PackagingAfsAttributeField
                title={`Первичная упаковка`}
                value={value.packaging_afs}
                onChange={packaging_afs => onPartialChange({packaging_afs})}
            />

            <PackagingAfsAttributeField
                title={`Вторичная упаковка`}
                value={value.packaging_afs2}
                onChange={packaging_afs2 => onPartialChange({packaging_afs2})}
            />

            <DosageFormAfsAttributeField
                title={`Тип лекарственной формы АФС`}
                value={value.dosage_form_afs}
                onChange={dosage_form_afs => onPartialChange({dosage_form_afs})}
            />

            <LimsDirLekPhormaAttributeField
                title={`Лекарственная форма АФС`}
                value={value.form_afs}
                onChange={form_afs => onPartialChange({form_afs})}
            />

            <Storage_conditionListAttributeField
                title={`Условия хранения`}
                value={value.Storage_condition}
                onChange={Storage_condition => onPartialChange({Storage_condition})}
            />

            <VolumesAttributeField
                title={`Продуктивность`}
                value={value.volumes}
                onChange={volumes => onPartialChange({volumes})}
            />

            <ConcentrationUnitsAttributeField
                title={`Единица продуктивности`}
                value={value.concentration_units}
                onChange={concentration_units => onPartialChange({concentration_units})}
            />

            <StringAttributeField
                title={`От`}
                value={value.volumes_from}
                onChange={volumes_from => onPartialChange({volumes_from})}
            />

            <IntegerAttributeField
                title={`Выход продукта`}
                value={value.product_yield}
                onChange={product_yield => onPartialChange({product_yield})}
            />

            <StringAttributeField
                title={`До`}
                value={value.volumes_to}
                onChange={volumes_to => onPartialChange({volumes_to})}
            />

            <ERPMeasureUnitsAttributeField
                title={`ед. измерения`}
                value={value.measure_units}
                onChange={measure_units => onPartialChange({measure_units})}
            />

            <Manufacturer_2_2AttributeField
                title={`Производитель`}
                value={value.manufacturer_2_2}
                onChange={manufacturer_2_2 => onPartialChange({manufacturer_2_2})}
            />

            <LimitingPatentsListAttributeField
                title={`Лимитирующие патенты`}
                value={value.limiting_patents}
                onChange={limiting_patents => onPartialChange({limiting_patents})}
            />
        </InnerCard>
        <SubstanceWrapper>
            <SubstanceListAttributeField
                title={`Действующее вещество`}
                value={value.activeSubstance}
                onChange={activeSubstance => onPartialChange({activeSubstance})}
                addButtonLabel={'Добавить действующее вещество'}
            />
        </SubstanceWrapper>

        <SubstanceWrapper>
            <SubstanceListAttributeField
                title={`Вспомогательное вещество`}
                value={value.auxiliarySubstance}
                onChange={auxiliarySubstance => onPartialChange({auxiliarySubstance})}
                addButtonLabel={'Добавить вспомогательное вещество'}
            />
        </SubstanceWrapper>
        <PackingWrapper>
            <PackingListAttributeField
                title={`Фасовки`}
                value={value.packing}
                onChange={packing => onPartialChange({packing})}
            />
        </PackingWrapper>

    </>;
}

const TechnologyWrapper = styled.div`
    display: flex;
    margin: -5px;
    
     > div {
        width: 40%;
        margin-right: 10%;
    }
`;

const PackingWrapper = styled.div`
    .header {
        padding-bottom: 15px;
    }
    .packing-type {
        width: 40%;
        margin-bottom: 15px;
    }
    
    .packing-type .content {
        padding-bottom: 15px;
    }
        
    .padding-type .b-input {
        padding: 0;
        border: 1px solid red;

    }
    
    .packing-type .header {
        padding-bottom: 15px;
    }
    
`;

const SubstanceWrapper = styled.div`
    .name {
        width: 40%;
    }

    .concentration {
        display: flex;
        justify-content: space-between;
    }
    
    .concentration > div {
        width: 30%;
    }
    
    .concentration .b-input {
        margin-top: 0px; 
    }
`;


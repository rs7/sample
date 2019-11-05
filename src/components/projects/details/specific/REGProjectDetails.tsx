import React from "react";
import {REGProject} from "../../../../model/new/project/specific/REGProject";
import {ChangesTypeAttributeField, LimsCountryListAttributeField, MerDocumentsListAttributeField, ProductTypeAttributeField, RegistrationSchemeAttributeField, RegistrationTypeAttributeField, TradeNameAttributeField, TypeOfDatesAttributeField} from "../../../attribute/dictionary/AttributeField";
import {DateAttributeField} from "../../../attribute/simple/AttributeField";
import {InnerCard} from "../../../common/attributes/container/InnerCard";
import {createPartialChange} from "../../../../entity/editor/PartialOnChange";
import {ProjectProps} from "../../ProjectProps";

export function REGProjectDetails({value, onChange}: ProjectProps<REGProject>) {
    let onPartialChange = createPartialChange(value, onChange);

    return <>
        <InnerCard>
            <TradeNameAttributeField
                title={`Торговое наименование`}
                value={value.trade_name}
                onChange={trade_name => onPartialChange({trade_name})}
            />

            <ProductTypeAttributeField
                title={`Тип продукта`}
                value={value.product_type}
                onChange={product_type => onPartialChange({product_type})}
            />

            <DateAttributeField
                title={`Ожидаемая дата получения РУ`}
                value={value.expected_date}
                onChange={expected_date => onPartialChange({expected_date})}
            />

            <DateAttributeField
                title={`Дата и время`}
                value={value.date}
                onChange={date => onPartialChange({date})}
            />

            <TypeOfDatesAttributeField
                title={`Дата подачи документов`}
                value={value.typesof_dates}
                onChange={typesof_dates => onPartialChange({typesof_dates})}
            />

            <LimsCountryListAttributeField
                title={`Страны регистрации`}
                value={value.country}
                onChange={country => onPartialChange({country})}
            />

            <RegistrationSchemeAttributeField
                title={`Схема регистрации`}
                value={value.registration_scheme}
                onChange={registration_scheme => onPartialChange({registration_scheme})}
            />

            <MerDocumentsListAttributeField
                title={`Документы досье, подлежащие изменению`}
                value={value.documents}
                onChange={documents => onPartialChange({documents})}
            />

            <ChangesTypeAttributeField
                title={`Тип изменений`}
                value={value.changes_type}
                onChange={changes_type => onPartialChange({changes_type})}
            />

            <RegistrationTypeAttributeField
                title={`Схема регистрации`}
                value={value.registration_type}
                onChange={registration_type => onPartialChange({registration_type})}
            />
        </InnerCard>
    </>;

}

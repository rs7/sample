import {createAttributeValue} from "../../attribute/AttributeFactory";
import {IntegerAttributeValue, StringAttributeValue} from "../../attribute/SimpleAttribute";
import {VariousClassName} from "../../common/className/ClassName";
import {DataBookValue} from "../DataBook";
import {Entity, EntityFactory} from "../Entity";

/**
 * Режим дозирования
 */
export interface DosageRegimen extends Entity {
    /**
     * Препарат
     */
    preparation: DataBookValue;

    /**
     * Наименование
     */
    title2: StringAttributeValue;

    /**
     * Ссылка на регистрационное удостоверение на сайте ГРЛС или FDA
     */
    link: StringAttributeValue;

    /**
     * Дозировка
     */
    dosage: StringAttributeValue;

    /**
     * Ед. измерения
     */
    unit: DataBookValue;

    /**
     * Режим введения: один раз в
     */
    induction_mode: IntegerAttributeValue;

    /**
     * Период
     */
    period: DataBookValue;

    /**
     * Продолжительность участия в КИ
     */
    length: IntegerAttributeValue;

    /**
     * Период
     */
    period2: DataBookValue;

    /**
     * Способ введения
     */
    inject_method: DataBookValue;
}

export function DosageRegimenFactory(): DosageRegimen {
    return {
        ...EntityFactory(VariousClassName.dosage_regimen),
        preparation: createAttributeValue.Object(),
        title2: createAttributeValue.String(),
        link: createAttributeValue.String(),
        dosage: createAttributeValue.String(),
        unit: createAttributeValue.Object(),
        induction_mode: createAttributeValue.Integer(),
        period: createAttributeValue.Object(),
        length: createAttributeValue.Integer(),
        period2: createAttributeValue.Object(),
        inject_method: createAttributeValue.Object(),
    };
}

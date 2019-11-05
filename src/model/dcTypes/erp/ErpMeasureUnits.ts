import {BooleanAttributeValue, FloatAttributeValue, StringAttributeValue} from "../../attribute/SimpleAttribute";
import {Entity} from "../../new/Entity";
import {LimsUnitsERP} from "../dataBook/LimsUnitsERP";
import {ErpNomenclature} from "./ErpNomenclature";

/**
 * [ERP] Упаковки и единицы измерения
 * DC-class: erpMeasureUnits
 */
export interface ErpMeasureUnits extends Entity {
    /**
     * GUID ERP
     */
    guidERP: StringAttributeValue;

    /**
     * Полное наименование
     */
    fullName: StringAttributeValue;

    /**
     *  Код
     */
    code: StringAttributeValue;

    /**
     * Название
     */
    title: StringAttributeValue;

    /**
     * Версия данных
     */
    dataVersion: StringAttributeValue;

    /**
     *  Международное сокращение
     */
    internationalName: StringAttributeValue;

    /**
     *  Единица измерения
     */
    unit: LimsUnitsERP;

    /**
     *  Номенклатура
     */
    nomenclature: ErpNomenclature;

    /**
     *  Знаменатель
     */
    denominator: FloatAttributeValue;

    /**
     *  Числитель
     */
    numenator: FloatAttributeValue;

    /**
     *  Безразмерная
     */
    unlimited: BooleanAttributeValue;
}

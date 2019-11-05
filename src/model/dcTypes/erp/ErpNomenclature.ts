import {BooleanAttributeValue, FloatAttributeValue, StringAttributeValue} from "../../attribute/SimpleAttribute";
import {Entity} from "../../new/Entity";

/**
 * [ERP] Номенклатура
 * erpNomenclature
 */
    //TODO класс не полностью заполнен
export interface ErpNomenclature extends Entity {
    /**
     * Вес упаковки
     */
    itemWeight: FloatAttributeValue;

    /**
     * Используется в плане продаж
     */
    useInSalesPlan: BooleanAttributeValue;

    /**
     * Вес вещества
     */
    weight: FloatAttributeValue;

    /**
     * Количество в упаковке
     */
    quantity: FloatAttributeValue; // TODO: так в DC, но правильно ли?

    /**
     * Использовать упаковки
     */
    usePacks: BooleanAttributeValue;

    /**
     * Код
     */
    code: StringAttributeValue;

    /**
     * GUID ERP
     */
    guidERP: StringAttributeValue;

    /**
     * Полное наименование
     */
    fullName: StringAttributeValue;

    /**
     * Наименование
     */
    title: StringAttributeValue;

    /**
     * Версия данных
     */
    dataVersion: StringAttributeValue;

    /**
     * Необходимо проводить сертификацию
     */
    needCertification: BooleanAttributeValue;
}

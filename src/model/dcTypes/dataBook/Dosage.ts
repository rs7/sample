import {StringAttributeValue} from "../../attribute/SimpleAttribute";
import {UnitDataBook} from "./UnitDataBook";

/**
 * Запись справочника "Дозировки"
 * dosage
 */
export interface Dosage {

    /**
     * Единица измерения
     */
    dimension: UnitDataBook;

    /**
     * Значение дозировки
     */
    value: StringAttributeValue;

    /**
     * Заголовок
     */
    title: StringAttributeValue;
}

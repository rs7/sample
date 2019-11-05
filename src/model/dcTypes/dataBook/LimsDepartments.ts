import {BooleanAttributeValue, StringAttributeValue} from "../../attribute/SimpleAttribute";

/**
 *  Запись справочника "Подразделения"
 *  lims_departments
 */
export interface LimsDepartments {
    /**
     * Не использовать
     */
    dontUse: BooleanAttributeValue;

    /**
     * GUID ERP
     */
    guidERP: StringAttributeValue;

    /**
     * Родительское подразделение
     */
    parent: LimsDepartments;
}

import {IntegerAttributeValue, StringAttributeValue} from "../../attribute/SimpleAttribute";
import {DataBookValue} from "../../new/DataBook";

/**
 * Запись справочника "Тип лекартвенной формы"
 * dosage_form
 */
export interface DosageFormType {
    /**
     * ID DrugBook
     */
    idDrugBook: IntegerAttributeValue;

    /**
     * Название (англ)
     */
    nameEng: StringAttributeValue;

    /**
     * Вид первичной упаковки
     */
    type_of_package: DataBookValue;
}


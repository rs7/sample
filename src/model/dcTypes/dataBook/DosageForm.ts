import {IntegerAttributeValue, StringAttributeValue} from "../../attribute/SimpleAttribute";
import {DosageFormType} from "./DosageFormType";

/**
 * Запись справочника "Лекарственная форма"
 * dosage_form
 */
export interface DosageForm {

    /**
     * Тип лекарственной формы
     */
    typeDosageForm: DosageFormType;

    /**
     * ID DrugBook
     */
    idDrugBook: IntegerAttributeValue;

    /**
     * Название (англ)
     */
    nameEng: StringAttributeValue;
}

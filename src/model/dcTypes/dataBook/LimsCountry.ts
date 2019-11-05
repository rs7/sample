import {StringAttributeValue} from "../../attribute/SimpleAttribute";
import {DataBookValue} from "../../new/DataBook";

/**
 * Справочник стран
 * lims_country
 */
export interface LimsCountry {
    /**
     * Язык
     */
    language: DataBookValue[];

    /**
     * Регулирование законодательства
     */
    Regulation_legislation: DataBookValue;

    /**
     * Двухбуквенный код
     */
    Code: StringAttributeValue;

    /**
     * Наименование короткое (англ)
     */
    title_en: StringAttributeValue;

    /**
     * Наименование короткое (рус)
     */
    title: StringAttributeValue;

    /**
     * Наименование полное (англ)
     */
    Full_name_en: StringAttributeValue;

    /**
     * Наименование полное (рус)
     */
    Full_name_ru: StringAttributeValue;
}

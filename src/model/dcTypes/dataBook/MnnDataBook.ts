import {DataBookValue} from "../../new/DataBook";

/**
 *  Запись справочника "МНН"
 *  mnn
 */
export interface MnnDataBook {
    /**
     *  Тип ЛС
     */
    typeLS: DataBookValue;

    /**
     *  ID DrugBook
     */
    idDrugbook: number;

    /**
     *  Название (англ)
     */
    nameEng: string;
}

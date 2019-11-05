import {createAttributeValue} from "../../../attribute/AttributeFactory";
import {IntegerAttributeValue} from "../../../attribute/SimpleAttribute";
import {ProjectClassName} from "../../../common/className/ClassName";
import {DosageForm} from "../../../dcTypes/dataBook/DosageForm";
import {EquipmentItems} from "../../../dcTypes/EquipmentItems";
import {ErpMnn} from "../../../dcTypes/erp/ErpMnn";
import {DataBookValue} from "../../DataBook";
import {Referent} from "../../nested/Referent";
import {Substance} from "../../nested/Substance";
import {ProjectBase, ProjectBaseFactory} from "../ProjectBase";

/**
 * DPD_Проект по разработке лекарственного препарата
 */
export interface DPDProject extends ProjectBase {
    //className: ProjectClassName.DPD;

    /**
     * Референтный препарат
     */
    referent: Referent[];

    /**
     * Международное непатентованное наименование
     */
    MNN: ErpMnn;

    /**
     * Действующее вещество
     */
    activeSubstance: Substance[];

    /**
     * Вспомогательные вещества
     */
    auxiliarySubstance: Substance[];

    /**
     * Тип лекарственной формы ГЛФ
     */
    dosage_form_afs: DosageForm;

    /**
     * Лекарственная форма
     */
    form: DataBookValue;

    /**
     * Комплектация
     */
    equipment: EquipmentItems;

    /**
     * Срок годности
     */
    expiration: IntegerAttributeValue;

    /**
     * Выпадающий список
     */
    time: DataBookValue;

    /**
     * Условия хранения
     */
    Storage_condition: DataBookValue[];

    /**
     * Специальная маркировка
     */
    special_marking: DataBookValue;

    /**
     * Дозировка
     */
    dosage2: DataBookValue;

    /**
     * ед.измерения
     */
    units: DataBookValue;

    /**
     * Первичная упаковка ГЛФ
     */
    packaging: DataBookValue;

    /**
     * Вторичная упаковка
     */
    packaging2: DataBookValue;

    /**
     *  Фасовка
     */
    packing: IntegerAttributeValue;

}

export function DPDProjectFactory(): DPDProject {
    return {
        ...ProjectBaseFactory(ProjectClassName.DPD),
        referent: createAttributeValue.ObjectList(),
        MNN: createAttributeValue.Object(),
        activeSubstance: createAttributeValue.ObjectList(),
        auxiliarySubstance: createAttributeValue.ObjectList(),
        dosage_form_afs: createAttributeValue.Object(),
        form: createAttributeValue.Object(),
        equipment: createAttributeValue.Object(),
        expiration: createAttributeValue.Integer(),
        time: createAttributeValue.Object(),
        Storage_condition: createAttributeValue.ObjectList(),
        special_marking: createAttributeValue.Object(),
        dosage2: createAttributeValue.Object(),
        units: createAttributeValue.Object(),
        packaging: createAttributeValue.Object(),
        packaging2: createAttributeValue.Object(),
        packing: createAttributeValue.Integer()
    };
}

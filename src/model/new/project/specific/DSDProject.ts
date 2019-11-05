import {createAttributeValue} from "../../../attribute/AttributeFactory";
import {BooleanAttributeValue, IntegerAttributeValue, StringAttributeValue} from "../../../attribute/SimpleAttribute";
import {ProjectClassName} from "../../../common/className/ClassName";
import {DataBookValue} from "../../DataBook";
import {Packing} from "../../nested/Packing";
import {Substance} from "../../nested/Substance";
import {ProjectBase, ProjectBaseFactory} from "../ProjectBase";

/**
 * Проект по разработке активной формацевтической субстанции
 */
export interface DSDProject extends ProjectBase {
    //className: ProjectClassName.DSD;

    /**
     * Вид разработки
     */
    development_type: DataBookValue;

    /**
     * Описание изменений
     */
    changes_description: DataBookValue[];

    /**
     * Наличие технологии
     */
    technology: BooleanAttributeValue;

    /**
     * Тип техологии
     */
    technology_kind: DataBookValue;

    /**
     * Назначение
     */
    purpose: DataBookValue;

    /**
     * Продуктивность
     */
    volumes: DataBookValue;

    /**
     * Единица продуктивности
     */
    concentration_units: DataBookValue;

    /**
     * Выход продукта
     */
    product_yield: IntegerAttributeValue;

    /**
     * ед. измерения
     */
    measure_units: DataBookValue; //ErpMeasureUnits;

    /**
     * Производитель
     */
    manufacturer_2_2: DataBookValue;

    /**
     * Лимитирующие патенты
     */
    limiting_patents: DataBookValue[];

    /**
     * От
     */
    volumes_from: StringAttributeValue;

    /**
     * До
     */
    volumes_to: StringAttributeValue;

    /**
     * Срок годности
     */
    expiration_date: IntegerAttributeValue;

    /**
     * Выпадающий список
     */
    time_periods: DataBookValue;

    /**
     * Тип лекарственной формы АФС
     */
    dosage_form_afs: DataBookValue;

    /**
     * Лекарственная форма АФС
     */
    form_afs: DataBookValue;

    /**
     * Условия хранения
     */
    Storage_condition: DataBookValue[];

    /**
     * Действующее вещество
     */
    activeSubstance: Substance[];

    /**
     * Вспомогающее вещество
     */
    auxiliarySubstance: Substance[];

    /**
     * Фасовки
     */
    packing: Packing[];

    /**
     * Первичная упаковка
     */
    packaging_afs: DataBookValue;

    /**
     * Вторичная упаковка
     */
    packaging_afs2: DataBookValue;
}

export function DSDProjectFactory(): DSDProject {
    return {
        ...ProjectBaseFactory(ProjectClassName.DSD),
        development_type: createAttributeValue.Object(),
        changes_description: createAttributeValue.ObjectList(),
        technology: createAttributeValue.Boolean(),
        technology_kind: createAttributeValue.Object(),
        purpose: createAttributeValue.Object(),
        volumes: createAttributeValue.Object(),
        concentration_units: createAttributeValue.Object(),
        product_yield: createAttributeValue.Integer(),
        measure_units: createAttributeValue.Object(),
        manufacturer_2_2: createAttributeValue.Object(),
        limiting_patents: createAttributeValue.ObjectList(),
        volumes_from: createAttributeValue.String(),
        volumes_to: createAttributeValue.String(),
        expiration_date: createAttributeValue.Integer(),
        time_periods: createAttributeValue.Object(),
        dosage_form_afs: createAttributeValue.Object(),
        form_afs: createAttributeValue.Object(),
        Storage_condition: createAttributeValue.ObjectList(),
        activeSubstance: createAttributeValue.ObjectList(),
        auxiliarySubstance: createAttributeValue.ObjectList(),
        packing: createAttributeValue.ObjectList(),
        packaging_afs: createAttributeValue.Object(),
        packaging_afs2: createAttributeValue.Object()

    };
}

import {createAttributeValue} from "../../../attribute/AttributeFactory";
import {DateAttributeValue} from "../../../attribute/SimpleAttribute";
import {ProjectClassName} from "../../../common/className/ClassName";
import {MerDocuments} from "../../../dcTypes/MerDocuments";
import {DataBookValue} from "../../DataBook";
import {ProjectBase, ProjectBaseFactory} from "../ProjectBase";

/**
 * Проект по регистрации
 */
export interface REGProject extends ProjectBase {
    //className: ProjectClassName.REG;

    /**
     *  Торговое наименование
     */
    trade_name: DataBookValue;

    /**
     *  Схема регистрации
     */
    registration_type: DataBookValue;

    /**
     * Тип изменений
     */
    changes_type: DataBookValue;

    /**
     * Документы досье, подлежащие изменению
     */
    documents: MerDocuments[];

    /**
     * Схема регистрации
     */
    registration_scheme: DataBookValue;

    /**
     * Страны регистрации
     */
    country: DataBookValue[];

    /**
     * Дата подачи документов
     */
    typesof_dates: DataBookValue;

    /**
     * Дата и время
     */
    date: DateAttributeValue;

    /**
     * Ожидаемая дата получения РУ
     */
    expected_date: DateAttributeValue;

    /**
     * Тип продукта
     */
    product_type: DataBookValue;
}

export function REGProjectFactory(): REGProject {
    return {
        ...ProjectBaseFactory(ProjectClassName.REG),
        trade_name: createAttributeValue.Object(),
        registration_type: createAttributeValue.Object(),
        changes_type: createAttributeValue.Object(),
        documents: createAttributeValue.ObjectList(),
        registration_scheme: createAttributeValue.Object(),
        country: createAttributeValue.ObjectList(),
        typesof_dates: createAttributeValue.Object(),
        date: createAttributeValue.Date(),
        expected_date: createAttributeValue.Date(),
        product_type: createAttributeValue.Object(),
    };
}

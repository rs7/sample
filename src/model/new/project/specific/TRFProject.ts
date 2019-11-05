import {createAttributeValue} from "../../../attribute/AttributeFactory";
import {ProjectClassName} from "../../../common/className/ClassName";
import {DataBookValue} from "../../DataBook";
import {ProjectBase, ProjectBaseFactory} from "../ProjectBase";

/**
 * Проект по осуществлению технологического трансфера
 */
export interface TRFProject extends ProjectBase {
    //className: ProjectClassName.TRF;

    /**
     * Форма трансфера
     */
    transferm_form: DataBookValue;

    /**
     * Тип трансфера
     */
    transfer_type: DataBookValue;

    /**
     * Принимающая сторона
     */
    manufacturer: DataBookValue;

    /**
     * Передающая сторона
     */
    manufacturer_2_2: DataBookValue;

    /**
     * Партнер
     */
    partner: DataBookValue;
}

export function TRFProjectFactory(): TRFProject {
    return {
        ...ProjectBaseFactory(ProjectClassName.TRF),
        transferm_form: createAttributeValue.Object(),
        transfer_type: createAttributeValue.Object(),
        manufacturer: createAttributeValue.Object(),
        manufacturer_2_2: createAttributeValue.Object(),
        partner: createAttributeValue.Object(),
    };
}

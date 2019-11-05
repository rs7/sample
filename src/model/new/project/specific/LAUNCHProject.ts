import {createAttributeValue} from "../../../attribute/AttributeFactory";
import {BooleanAttributeValue, StringAttributeValue} from "../../../attribute/SimpleAttribute";
import {ProjectClassName} from "../../../common/className/ClassName";
import {DataBookValue} from "../../DataBook";
import {ProjectBase, ProjectBaseFactory} from "../ProjectBase";

/**
 * Запуск нового продукта или показания
 */
export interface LAUNCHProject extends ProjectBase {
    //className: ProjectClassName.LAUNCH;

    /**
     * Первичный запуск препарата на рынке
     */
    first_launch: BooleanAttributeValue;

    /**
     * Страна
     */
    country: DataBookValue[];

    /**
     * Показания
     */
    instructions: DataBookValue[];

    /**
     * Препарат
     */
    product: StringAttributeValue;
}

export function LAUNCHProjectFactory(): LAUNCHProject {
    return {
        ...ProjectBaseFactory(ProjectClassName.LAUNCH),
        first_launch: createAttributeValue.Object(),
        country: createAttributeValue.ObjectList(),
        instructions: createAttributeValue.ObjectList(),
        product: createAttributeValue.String(),
    };
}

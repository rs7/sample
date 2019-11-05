import {createAttributeValue} from "../../../attribute/AttributeFactory";
import {ProjectClassName} from "../../../common/className/ClassName";
import {DataBookValue} from "../../DataBook";
import {ProjectBase, ProjectBaseFactory} from "../ProjectBase";

/**
 * Разработка генотерапевтических препаратов для доставки заданных трансгенов
 */
export interface TRANSProject extends ProjectBase {
    //className: ProjectClassName.TRANS;

    /**
     * Тип терапии
     */
    terapy_type: DataBookValue;

    /**
     * Вектор доставки
     */
    vector: DataBookValue;

    /**
     * Серотип вируса
     */
    serotype: DataBookValue;

    /**
     * Трансгены
     */
    transgenes: DataBookValue[];
}

export function TRANSProjectFactory(): TRANSProject {
    return {
        ...ProjectBaseFactory(ProjectClassName.TRANS),
        terapy_type: createAttributeValue.Object(),
        vector: createAttributeValue.Object(),
        serotype: createAttributeValue.Object(),
        transgenes: createAttributeValue.ObjectList(),
    };
}

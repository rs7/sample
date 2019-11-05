import {createAttributeValue} from "../../../attribute/AttributeFactory";
import {ProjectClassName} from "../../../common/className/ClassName";
import {DataBookValue} from "../../DataBook";
import {ProjectBase, ProjectBaseFactory} from "../ProjectBase";

/**
 * Разработка формата терапевтического антитела на основе известных байндеров
 */
export interface MABProject extends ProjectBase {
    //className: ProjectClassName.MAB;

    /**
     * Формат антитела
     */
    format_ab: DataBookValue;

    /**
     * Тип Fc фрагмента
     */
    fc_type: DataBookValue;

    /**
     * Пришивки
     */
    fusion_mab: DataBookValue[];

    /**
     * Сотрудник ОФП
     */
    managerOFP: DataBookValue;
}

export function MABProjectFactory(): MABProject {
    return {
        ...ProjectBaseFactory(ProjectClassName.MAB),
        format_ab: createAttributeValue.Object(),
        fc_type: createAttributeValue.Object(),
        fusion_mab: createAttributeValue.ObjectList(),
        managerOFP: createAttributeValue.Object(),
    };
}

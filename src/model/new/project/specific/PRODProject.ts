import {createAttributeValue} from "../../../attribute/AttributeFactory";
import {StringAttributeValue} from "../../../attribute/SimpleAttribute";
import {ProjectClassName} from "../../../common/className/ClassName";
import {Criteria} from "../../nested/Criteria";
import {ProjectBase, ProjectBaseFactory} from "../ProjectBase";

/**
 *  Проект направления производства
 */
export interface PRODProject extends ProjectBase {
    //className: ProjectClassName.PROD;

    /**
     * Описание проекта
     */
    description2: StringAttributeValue;

    /**
     * Критерии
     */
    projects_criteria: Criteria[];
}

export function PRODProjectFactory(): PRODProject {
    return {
        ...ProjectBaseFactory(ProjectClassName.PROD),
        description2: createAttributeValue.String(),
        projects_criteria: createAttributeValue.ObjectList(),
    };
}

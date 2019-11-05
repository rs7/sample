import {createAttributeValue} from "../../../attribute/AttributeFactory";
import {StringAttributeValue} from "../../../attribute/SimpleAttribute";
import {ProjectClassName} from "../../../common/className/ClassName";
import {Criteria} from "../../nested/Criteria";
import {ProjectBase, ProjectBaseFactory} from "../ProjectBase";

/**
 * Проект направления НИОКР
 */
export interface RDProject extends ProjectBase {
    //className: ProjectClassName.RD;

    /**
     * Описание проекта
     */
    project_description: StringAttributeValue;

    /**
     * Критерии
     */
    project_criteria: Criteria[];
}

export function RDProjectFactory(): RDProject {
    return {
        ...ProjectBaseFactory(ProjectClassName.RD),
        project_description: createAttributeValue.String(),
        project_criteria: createAttributeValue.ObjectList(),
    };
}

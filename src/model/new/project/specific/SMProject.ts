import {createAttributeValue} from "../../../attribute/AttributeFactory";
import {StringAttributeValue} from "../../../attribute/SimpleAttribute";
import {ProjectClassName} from "../../../common/className/ClassName";
import {Criteria} from "../../nested/Criteria";
import {ProjectBase, ProjectBaseFactory} from "../ProjectBase";

/**
 * Проект направления продаж и маркетинга
 */
export interface SMProject extends ProjectBase {
    //className: ProjectClassName.SM;

    /**
     * Описание проекта
     */
    project_description: StringAttributeValue;

    /**
     * Критерий успешности
     */
    projects_criteria: Criteria[];
}

export function SMProjectFactory(): SMProject {
    return {
        ...ProjectBaseFactory(ProjectClassName.SM),
        project_description: createAttributeValue.String(),
        projects_criteria: createAttributeValue.ObjectList(),
    };
}

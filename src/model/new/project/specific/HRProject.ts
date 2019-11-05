import {createAttributeValue} from "../../../attribute/AttributeFactory";
import {ProjectClassName} from "../../../common/className/ClassName";
import {Criteria} from "../../nested/Criteria";
import {ProjectBase, ProjectBaseFactory} from "../ProjectBase";

/**
 *  Проект направления HR
 */
export interface HRProject extends ProjectBase {
    //className: ProjectClassName.HR;

    /**
     *  Критерии успеха
     */
    projects_criteria: Criteria[];
}

export function HRProjectFactory(): HRProject {
    return {
        ...ProjectBaseFactory(ProjectClassName.HR),
        projects_criteria: createAttributeValue.ObjectList(),
    };
}

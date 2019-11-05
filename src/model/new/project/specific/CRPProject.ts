import {createAttributeValue} from "../../../attribute/AttributeFactory";
import {ProjectClassName} from "../../../common/className/ClassName";
import {Criteria} from "../../nested/Criteria";
import {ProjectBase, ProjectBaseFactory} from "../ProjectBase";

/**
 *  CRP_Общекорпоративный проект
 */
export interface CRPProject extends ProjectBase {
    //className: ProjectClassName.CRP;

    /**
     *  Критерии успеха
     */
    projects_criteria: Criteria[];
}

export function CRPProjectFactory(): CRPProject {
    return {
        ...ProjectBaseFactory(ProjectClassName.CRP),
        projects_criteria: createAttributeValue.ObjectList()
    };
}

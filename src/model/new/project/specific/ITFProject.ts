import {createAttributeValue} from "../../../attribute/AttributeFactory";
import {StringAttributeValue} from "../../../attribute/SimpleAttribute";
import {ProjectClassName} from "../../../common/className/ClassName";
import {ProjectTeams} from "../../../dcTypes/dataBook/ProjectTeams";
import {ItServices} from "../../../dcTypes/ItServices";
import {Criteria} from "../../nested/Criteria";
import {ProjectBase, ProjectBaseFactory} from "../ProjectBase";
import {DataBookValue} from "../../DataBook";

/**
 * Проект направления ITF и операционного менеджмента
 */
export interface ITFProject extends ProjectBase {
    //className: ProjectClassName.ITF;

    /**
     *  Описание проекта
     */
    description2: StringAttributeValue;

    /**
     *  Критерии проекта
     */
    projects_criteria: Criteria[];

    /**
     * Проектная команда
     */
    project_teams: DataBookValue[];

    /**
     * Информационный сервис
     */
    itservices: ItServices;

    /**
     * Результат проекта
     */
    project_result: StringAttributeValue
}

export function ITFProjectFactory(): ITFProject {
    return {
        ...ProjectBaseFactory(ProjectClassName.ITF),
        description2: createAttributeValue.String(),
        projects_criteria: createAttributeValue.ObjectList(),
        project_teams: createAttributeValue.ObjectList(),
        itservices: createAttributeValue.Object(),
        project_result: createAttributeValue.String()
    };
}

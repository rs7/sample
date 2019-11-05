import {createAttributeValue} from "../../../attribute/AttributeFactory";
import {StringAttributeValue} from "../../../attribute/SimpleAttribute";
import {ProjectClassName} from "../../../common/className/ClassName";
import {ItServices} from "../../../dcTypes/ItServices";
import {Criteria} from "../../nested/Criteria";
import {ProjectBase, ProjectBaseFactory} from "../ProjectBase";
import {DataBookValue} from "../../DataBook";

/**
 * Создание информационного сервиса
 */
export interface ITSProject extends ProjectBase {
    //className: ProjectClassName.ITS;

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

export function ITSProjectFactory(): ITSProject {
    return {
        ...ProjectBaseFactory(ProjectClassName.ITS),
        description2: createAttributeValue.String(),
        projects_criteria: createAttributeValue.ObjectList(),
        project_teams: createAttributeValue.ObjectList(),
        itservices: createAttributeValue.Object(),
        project_result: createAttributeValue.String()
    };
}

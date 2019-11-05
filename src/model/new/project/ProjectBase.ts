import {createAttributeValue} from "../../attribute/AttributeFactory";
import {DateAttributeValue, StringAttributeValue} from "../../attribute/SimpleAttribute";
import {ProjectClassName} from "../../common/className/ClassName";
import {DataBookValue} from "../DataBook";
import {Entity, EntityFactory} from "../Entity";
import {ProjectLink} from "../nested/ProjectLink";

/**
 *  Базовый класс проекта
 */
export interface ProjectBase extends Entity {
    title: StringAttributeValue;

    description: StringAttributeValue;

    ProjectType: DataBookValue;

    programm: DataBookValue;

    portfolio: DataBookValue;

    project: DataBookValue;

    tag: DataBookValue[];

    projectLinks: ProjectLink[];

    status: DataBookValue;

    menedzherproyekta: DataBookValue;

    projectStart: DateAttributeValue;

    projectEnd: DateAttributeValue;
}

export function ProjectBaseFactory(projectCode: ProjectClassName): ProjectBase {
    return {
        ...EntityFactory(projectCode),
        title: createAttributeValue.String(),
        description: createAttributeValue.String(),
        ProjectType: createAttributeValue.Object(),
        programm: createAttributeValue.Object(),
        portfolio: createAttributeValue.Object(),
        project: createAttributeValue.Object(),
        tag: createAttributeValue.ObjectList(),
        projectLinks: createAttributeValue.ObjectList(),
        status: createAttributeValue.Object(),
        menedzherproyekta: createAttributeValue.Object(),
        projectStart: createAttributeValue.Date(),
        projectEnd: createAttributeValue.Date(),
    };
}

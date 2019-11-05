import {createAttributeValue} from "../../../attribute/AttributeFactory";
import {StringAttributeValue} from "../../../attribute/SimpleAttribute";
import {ProjectClassName} from "../../../common/className/ClassName";
import {Criteria} from "../../nested/Criteria";
import {ProjectBase, ProjectBaseFactory} from "../ProjectBase";

/**
 *  Проект направления экономики и финансов
 */
export interface FINProject extends ProjectBase {
    //className: ProjectClassName.FIN;

    /**
     *  Описание
     */
    description2: StringAttributeValue;

    /**
     *  Критерий успешности
     */
    criteria: Criteria[];
}

export function FINProjectFactory(): FINProject {
    return {
        ...ProjectBaseFactory(ProjectClassName.FIN),
        description2: createAttributeValue.String(),
        criteria: createAttributeValue.ObjectList(),
    };
}

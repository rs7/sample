import {createAttributeValue} from "../../../attribute/AttributeFactory";
import {StringAttributeValue} from "../../../attribute/SimpleAttribute";
import {ProjectClassName} from "../../../common/className/ClassName";
import {DataBookValue} from "../../DataBook";
import {ProjectBase, ProjectBaseFactory} from "../ProjectBase";

/**
 * Разработка новых технологий для R&D
 */
export interface DISUPProject extends ProjectBase {
    //className: ProjectClassName.DISUP;

    /**
     * Направление
     */
    area: StringAttributeValue;

    /**
     * Стадия
     */
    stage: DataBookValue;
}

export function DISUPProjectFactory(): DISUPProject {
    return {
        ...ProjectBaseFactory(ProjectClassName.DISUP),
        area: createAttributeValue.String(),
        stage: createAttributeValue.Object()
    };
}

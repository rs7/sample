import {createAttributeValue} from "../../../attribute/AttributeFactory";
import {ProjectClassName} from "../../../common/className/ClassName";
import {Interaction} from "../../nested/Interaction";
import {ProjectBase, ProjectBaseFactory} from "../ProjectBase";

/**
 * Разработка терапевтических РНК для регуляции заданного транскрипта
 */
export interface RNAProject extends ProjectBase {
    //className: ProjectClassName.RNA;

    /**
     * Молекулярное действие препарата
     */
    interactions: Interaction[];
}

export function RNAProjectFactory(): RNAProject {
    return {
        ...ProjectBaseFactory(ProjectClassName.RNA),
        interactions: createAttributeValue.ObjectList(),
    };
}

import {createAttributeValue} from "../../../attribute/AttributeFactory";
import {ProjectClassName} from "../../../common/className/ClassName";
import {Interaction} from "../../nested/Interaction";
import {ProjectBase, ProjectBaseFactory} from "../ProjectBase";

/**
 *  Разработка формата терапевтического антитела на основе известных байндеров
 */
export interface CARTProject extends ProjectBase {
    //className: ProjectClassName.CART;

    /**
     * Молекулярное действие препарата
     */
    interactions: Interaction[];
}

export function CARTProjectFactory(): CARTProject {
    return {
        ...ProjectBaseFactory(ProjectClassName.CART),
        interactions: createAttributeValue.ObjectList()
    };
}

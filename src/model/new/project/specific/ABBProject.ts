import {createAttributeValue} from "../../../attribute/AttributeFactory";
import {ProjectClassName} from "../../../common/className/ClassName";
import {DataBookValue} from "../../DataBook";
import {Interaction} from "../../nested/Interaction";
import {ProjectBase, ProjectBaseFactory} from "../ProjectBase";

/**
 *  Поиск функциональных антительных байндеров к известной мишени
 */
export interface ABBProject extends ProjectBase {
    //className: ProjectClassName.ABB;

    /**
     * Тип антиген-связывающей части антитела
     */
    binder_type2: DataBookValue[];

    /**
     * Молекулярное действие препарата
     */
    targets2: Interaction[];
}

export function ABBProjectFactory(): ABBProject {
    return {
        ...ProjectBaseFactory(ProjectClassName.ABB),
        binder_type2: createAttributeValue.ObjectList(),
        targets2: createAttributeValue.ObjectList(),
    };
}

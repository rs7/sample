import {createAttributeValue} from "../../../attribute/AttributeFactory";
import {BooleanAttributeValue} from "../../../attribute/SimpleAttribute";
import {ProjectClassName} from "../../../common/className/ClassName";
import {DataBookValue} from "../../DataBook";
import {Interaction} from "../../nested/Interaction";
import {ProjectBase, ProjectBaseFactory} from "../ProjectBase";

/**
 *  Разработка терапевтических малых молекул к заданной мишени
 */
export interface MOLProject extends ProjectBase {
    //className: ProjectClassName.MOL;

    /**
     * Является оригинальным препаратом
     */
    original: BooleanAttributeValue;

    /**
     * Международное непатентованное наименование
     */
    MNN: DataBookValue;

    /**
     * Молекула
     */
    molecule_2: DataBookValue;

    /**
     * Молекулярное действие препарата
     */
    interactions: Interaction[];

    /**
     * Производитель
     */
    manufacturer_2: DataBookValue;
}

export function MOLProjectFactory(): MOLProject {
    return {
        ...ProjectBaseFactory(ProjectClassName.MOL),
        original: createAttributeValue.Boolean(),
        MNN: createAttributeValue.Object(),
        molecule_2: createAttributeValue.Object(),
        interactions: createAttributeValue.ObjectList(),
        manufacturer_2: createAttributeValue.Object(),
    };
}

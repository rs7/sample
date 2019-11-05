import {createAttributeValue} from "../../../attribute/AttributeFactory";
import {BooleanAttributeValue, StringAttributeValue} from "../../../attribute/SimpleAttribute";
import {ProjectClassName} from "../../../common/className/ClassName";
import {DataBookValue} from "../../DataBook";
import {Sequence} from "../../nested/Sequence";
import {ProjectBase, ProjectBaseFactory} from "../ProjectBase";

/**
 *  Разработка технологии наработки известного белка
 */
export interface PROTProject extends ProjectBase {
    //className: ProjectClassName.PROT;

    /**
     * Является оригинальным препаратом
     */
    yavlyayetsya: BooleanAttributeValue;

    /**
     * Международное непатентованное наименование
     */
    MNN: DataBookValue;

    /**
     * Название нарабатываемого белка
     */
    protein: StringAttributeValue;

    /**
     * Нарабатываемая последовательность
     */
    sequence: Sequence[];

    /**
     * Производитель
     */
    manufacturer_2: DataBookValue;

    /**
     * Пришивки
     */
    fusions: DataBookValue[];
}

export function PROTProjectFactory(): PROTProject {
    return {
        ...ProjectBaseFactory(ProjectClassName.PROT),
        yavlyayetsya: createAttributeValue.Boolean(),
        MNN: createAttributeValue.Object(),
        protein: createAttributeValue.String(),
        sequence: createAttributeValue.ObjectList(),
        manufacturer_2: createAttributeValue.Object(),
        fusions: createAttributeValue.ObjectList(),
    };
}

import {createAttributeValue} from "../../attribute/AttributeFactory";
import {BooleanAttributeValue, StringAttributeValue} from "../../attribute/SimpleAttribute";
import {VariousClassName} from "../../common/className/ClassName";
import {DataBookValue} from "../DataBook";
import {Entity, EntityFactory} from "../Entity";

/**
 * Мишень
 */
export interface Target extends Entity {
    /**
     * Название мишени
     */
    title: StringAttributeValue;

    /**
     * Список доменов
     */
    domens: DataBookValue[];

    /**
     * Место посадки
     */
    place: BooleanAttributeValue;

    /**
     * Список изоформ
     */
    isoforms2: DataBookValue[];

    /**
     * Список эпитопов
     */
    epitopes: DataBookValue[];
}

export function TargetFactory(): Target {
    return {
        ...EntityFactory(VariousClassName.project_target),
        title: createAttributeValue.String(),
        domens: createAttributeValue.ObjectList(),
        place: createAttributeValue.Boolean(),
        isoforms2: createAttributeValue.ObjectList(),
        epitopes: createAttributeValue.ObjectList(),
    };
}

import {createAttributeValue} from "../../attribute/AttributeFactory";
import {StringAttributeValue} from "../../attribute/SimpleAttribute";
import {VariousClassName} from "../../common/className/ClassName";
import {Entity, EntityFactory} from "../Entity";

/**
 * Нарабатываемая последовательность
 */
export interface Sequence extends Entity {
    /**
     * Последовательность
     */
    sequence: StringAttributeValue;

    /**
     * Описание последовательности
     */
    title: StringAttributeValue;
}

export function SequenceFactory(): Sequence {
    return {
        ...EntityFactory(VariousClassName.project_sequence),
        sequence: createAttributeValue.String(),
        title: createAttributeValue.String(),
    };
}

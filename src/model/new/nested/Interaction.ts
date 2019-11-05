import {createAttributeValue} from "../../attribute/AttributeFactory";
import {StringAttributeValue} from "../../attribute/SimpleAttribute";
import {VariousClassName} from "../../common/className/ClassName";
import {DataBookValue} from "../DataBook";
import {Entity, EntityFactory} from "../Entity";
import {Target} from "./Target";

/**
 * Молекулярное взаимодействие
 */
export interface Interaction extends Entity {
    /**
     * Наименование
     */
    title: StringAttributeValue;

    /**
     * Направление воздействия препарата
     */
    binding: DataBookValue;

    /**
     * Список мишеней
     */
    targets: Target[];
}

export function InteractionFactory(): Interaction {
    return {
        ...EntityFactory(VariousClassName.interactions),
        title: createAttributeValue.String(),
        binding: createAttributeValue.Object(),
        targets: createAttributeValue.ObjectList(),
    };
}

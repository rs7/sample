import {createAttributeValue} from "../../attribute/AttributeFactory";
import {StringAttributeValue} from "../../attribute/SimpleAttribute";
import {VariousClassName} from "../../common/className/ClassName";
import {Entity, EntityFactory} from "../Entity";

/**
 * Критерии успеха проекта
 */
export interface Criteria extends Entity {
    /**
     * Описание
     */
    title: StringAttributeValue;
}

export function CriteriaFactory(): Criteria {
    return {
        ...EntityFactory(VariousClassName.projects_criteria),
        title: createAttributeValue.String(),
    };
}

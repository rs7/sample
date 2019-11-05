import {createAttributeValue} from "../../attribute/AttributeFactory";
import {StringAttributeValue} from "../../attribute/SimpleAttribute";
import {VariousClassName} from "../../common/className/ClassName";
import {DataBookValue} from "../DataBook";
import {Entity, EntityFactory} from "../Entity";

/**
 * Действующее вещество
 */
export interface Substance extends Entity {
    /**
     * Название вещества
     */
    title: StringAttributeValue;

    /**
     * Ед. концентрации
     */
    concentration: DataBookValue;

    /**
     * Значение концентрации
     */
    number: StringAttributeValue;

    /**
     * Концентрация/Содержание
     */
    volumes: DataBookValue;
}

export function SubstanceFactory(): Substance {
    return {
        ...EntityFactory(VariousClassName.activeSubstance),
        title: createAttributeValue.String(),
        concentration: createAttributeValue.Object(),
        number: createAttributeValue.String(),
        volumes: createAttributeValue.Object(),
    };
}

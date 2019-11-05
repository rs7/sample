import {createAttributeValue} from "../../attribute/AttributeFactory";
import {IntegerAttributeValue, StringAttributeValue} from "../../attribute/SimpleAttribute";
import {VariousClassName} from "../../common/className/ClassName";
import {DataBookValue} from "../DataBook";
import {Entity, EntityFactory} from "../Entity";

/**
 * Фасовка
 */
export interface Packing extends Entity {
    /**
     * Фасовка
     */
    volumes: DataBookValue;

    /**
     * Первичная упаковка
     */
    packing: DataBookValue;

    /**
     * Значение
     */
    number: StringAttributeValue;

    /**
     * ед. измерения
     */
    units: DataBookValue;

    /**
     * Вторичная упаковка
     */
    packing2: DataBookValue;

    /**
     * Количество
     */
    amount: IntegerAttributeValue;
}

export function PackingFactory(): Packing {
    return {
        ...EntityFactory(VariousClassName.packing),
        volumes: createAttributeValue.Object(),
        packing: createAttributeValue.Object(),
        number: createAttributeValue.String(),
        units: createAttributeValue.Object(),
        packing2: createAttributeValue.Object(),
        amount: createAttributeValue.Integer(),
    };
}

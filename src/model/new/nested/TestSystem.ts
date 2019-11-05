import {createAttributeValue} from "../../attribute/AttributeFactory";
import {IntegerAttributeValue} from "../../attribute/SimpleAttribute";
import {VariousClassName} from "../../common/className/ClassName";
import {DataBookValue} from "../DataBook";
import {Entity, EntityFactory} from "../Entity";

/**
 * Тест системы
 */
export interface TestSystem extends Entity {
    /**
     * Тип образца
     */
    sample_type: DataBookValue;

    /**
     * Время до получения результата
     */
    time_to_result: IntegerAttributeValue;

    /**
     * Единица измерения времени
     */
    time: DataBookValue;

    /**
     * Число этапов
     */
    number_of_stages: IntegerAttributeValue;

    /**
     * Метод
     */
    test_method: DataBookValue;
}

export function TestSystemFactory(): TestSystem {
    return {
        ...EntityFactory(VariousClassName.test_system),
        number_of_stages: createAttributeValue.Integer(),
        sample_type: createAttributeValue.Object(),
        test_method: createAttributeValue.Object(),
        time: createAttributeValue.Object(),
        time_to_result: createAttributeValue.Integer(),
    };
}

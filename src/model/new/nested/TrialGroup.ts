import {createAttributeValue} from "../../attribute/AttributeFactory";
import {IntegerAttributeValue, StringAttributeValue} from "../../attribute/SimpleAttribute";
import {VariousClassName} from "../../common/className/ClassName";
import {Entity, EntityFactory} from "../Entity";
import {DosageRegimen} from "./DosageRegimen";

/**
 * Исследуемые группы
 */
export interface TrialGroup extends Entity {
    /**
     * Наименование
     */
    title: StringAttributeValue;

    /**
     * Линия терапии
     */
    therapyLine: IntegerAttributeValue;

    /**
     * Количество наблюдаемых
     */
    ParticipantsNumber: IntegerAttributeValue;

    /**
     * Режим дозирования
     */
    dosageRegimen: DosageRegimen[];
}

export function TrialGroupFactory(): TrialGroup {
    return {
        ...EntityFactory(VariousClassName.trial_groups),
        title: createAttributeValue.String(),
        therapyLine: createAttributeValue.Integer(),
        ParticipantsNumber: createAttributeValue.Integer(),
        dosageRegimen: createAttributeValue.ObjectList(),
    };
}

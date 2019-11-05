import {createAttributeValue} from "../../../attribute/AttributeFactory";
import {ProjectClassName} from "../../../common/className/ClassName";
import {DataBookValue} from "../../DataBook";
import {ProjectBase, ProjectBaseFactory} from "../ProjectBase";

/**
 * Проект по проведению доклинических исследований
 */
export interface NCSProject extends ProjectBase {
    //className: ProjectClassName.NCS;

    /**
     * Страна
     */
    country: DataBookValue;

    /**
     * Тип ДКИ с исследов группами
     */
    dki_type_trial_groups: DataBookValue[];

    /**
     * Исследовательский центр
     */
    research_center: DataBookValue;

    /**
     * Фаза ДКИ
     */
    dki_phase: DataBookValue;

    /**
     * Показания по МКБ
     */
    Nosologies_ICD: DataBookValue;

}

export function NCSProjectFactory(): NCSProject {
    return {
        ...ProjectBaseFactory(ProjectClassName.NCS),
        country: createAttributeValue.Object(),
        dki_type_trial_groups: createAttributeValue.ObjectList(),
        research_center: createAttributeValue.Object(),
        dki_phase: createAttributeValue.Object(),
        Nosologies_ICD: createAttributeValue.Object(),
    };
}

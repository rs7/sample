import {createAttributeValue} from "../../../attribute/AttributeFactory";
import {BooleanAttributeValue} from "../../../attribute/SimpleAttribute";
import {ProjectClassName} from "../../../common/className/ClassName";
import {DataBookValue} from "../../DataBook";
import {TrialGroup} from "../../nested/TrialGroup";
import {ProjectBase, ProjectBaseFactory} from "../ProjectBase";

/**
 * CT_Проект по проведению клинических исследований
 * CT
 */
export interface CTProject extends ProjectBase {
    //className: ProjectClassName.CT;

    /**
     * Связь с другим проектом
     */
    project_CT: CTProject;

    /**
     * Международное
     */
    international: BooleanAttributeValue;

    /**
     * По количеству центров
     */
    centre_classification: DataBookValue;

    /**
     * Страна
     */
    country: DataBookValue;

    /**
     * Показания по МКБ
     */
    Nosologies_ICD: DataBookValue[];

    /**
     * Фаза КИ
     */
    ki_phase: DataBookValue;

    /**
     * Исследуемая группа
     */
    trialGroup: TrialGroup[];

    /**
     *  Тип КИ
     */
    trial_type: DataBookValue;

    /**
     *  Степень контроля
     */
    control_type: DataBookValue;

    /**
     * Фармакокинетика
     */
    pharma_c: BooleanAttributeValue;

    /**
     * Фармакодинамика
     */
    pharma_d: BooleanAttributeValue;

    /**
     * Иммуногенность
     */
    imunno: BooleanAttributeValue;

    /**
     * Тип сравнения КИ
     */
    comparisons_type: DataBookValue[];

}

export function CTProjectFactory(): CTProject {
    return {
        ...ProjectBaseFactory(ProjectClassName.CT),
        project_CT: createAttributeValue.Object(),
        international: createAttributeValue.Boolean(),
        centre_classification: createAttributeValue.Object(),
        country: createAttributeValue.Object(),
        Nosologies_ICD: createAttributeValue.ObjectList(),
        ki_phase: createAttributeValue.Object(),
        trialGroup: createAttributeValue.ObjectList(),
        trial_type: createAttributeValue.Object(),
        control_type: createAttributeValue.Object(),
        pharma_c: createAttributeValue.Boolean(),
        pharma_d: createAttributeValue.Boolean(),
        imunno: createAttributeValue.Boolean(),
        comparisons_type: createAttributeValue.ObjectList()
    };
}

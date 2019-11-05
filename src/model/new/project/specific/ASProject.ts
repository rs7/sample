import {createAttributeValue} from "../../../attribute/AttributeFactory";
import {BooleanAttributeValue, StringAttributeValue} from "../../../attribute/SimpleAttribute";
import {ProjectClassName} from "../../../common/className/ClassName";
import {LimsDepartments} from "../../../dcTypes/dataBook/LimsDepartments";
import {DataBookValue} from "../../DataBook";
import {ProjectBase, ProjectBaseFactory} from "../ProjectBase";

/**
 *  Создание и модернизация автоматизированной системы
 */
export interface ASProject extends ProjectBase {
    //className: ProjectClassName.AS;

    /**
     * Наименование системы согласно URS
     */
    name: StringAttributeValue;

    /**
     * Тип работ
     */
    workType: DataBookValue;

    /**
     * Тип системы
     */
    system_Type: DataBookValue;

    /**
     *  Подразделение, осуществляющие ТОиР
     */
    department: LimsDepartments;

    /**
     *  Клиент (подразделение) Пользователь системы
     */
    department2: LimsDepartments;

    /**
     *  Представитель департамента
     */
    user: DataBookValue;

    /**
     *  Необходимость квалификационных/валидационных мероприятий
     */
    events: BooleanAttributeValue;
}

export function ASProjectFactory(): ASProject {
    return {
        ...ProjectBaseFactory(ProjectClassName.AS),
        name: createAttributeValue.String(),
        workType: createAttributeValue.Object(),
        system_Type: createAttributeValue.Object(),
        department: createAttributeValue.Object(),
        department2: createAttributeValue.Object(),
        user: createAttributeValue.Object(),
        events: createAttributeValue.Boolean()
    };
}

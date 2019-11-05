import {createAttributeValue} from "../../../attribute/AttributeFactory";
import {StringAttributeValue} from "../../../attribute/SimpleAttribute";
import {ProjectClassName} from "../../../common/className/ClassName";
import {LimsDepartments} from "../../../dcTypes/dataBook/LimsDepartments";
import {DataBookValue} from "../../DataBook";
import {ProjectBase, ProjectBaseFactory} from "../ProjectBase";

/**
 * Создание инженерной системы
 */
export interface ESProject extends ProjectBase {
    //className: ProjectClassName.ES;

    /**
     * Тип работ
     */
    workType: DataBookValue;

    /**
     * Наименование системы согласно URS
     */
    name_URS: StringAttributeValue;

    /**
     * Пользователь системы (подразделение)
     */
    department: LimsDepartments;

    /**
     *  Локация
     */
    manufacturer: DataBookValue;
}

export function ESProjectFactory(): ESProject {
    return {
        ...ProjectBaseFactory(ProjectClassName.ES),
        workType: createAttributeValue.Object(),
        name_URS: createAttributeValue.String(),
        department: createAttributeValue.Object(),
        manufacturer: createAttributeValue.Object(),
    };
}

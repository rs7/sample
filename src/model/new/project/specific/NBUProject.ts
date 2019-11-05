import {createAttributeValue} from "../../../attribute/AttributeFactory";
import {ProjectClassName} from "../../../common/className/ClassName";
import {DataBookValue} from "../../DataBook";
import {ProjectBase, ProjectBaseFactory} from "../ProjectBase";

/**
 *  Создание нового зарубежного представительства
 */
export interface NBUProject extends ProjectBase {
    //className: ProjectClassName.NBU;

    /**
     *  Страна
     */
    country: DataBookValue;

    /**
     * Тип представительства
     */
    business_unit_type: DataBookValue;
}

export function NBUProjectFactory(): NBUProject {
    return {
        ...ProjectBaseFactory(ProjectClassName.NBU),
        country: createAttributeValue.Object(),
        business_unit_type: createAttributeValue.Object(),
    };
}

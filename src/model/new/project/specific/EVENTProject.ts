import {createAttributeValue} from "../../../attribute/AttributeFactory";
import {IntegerAttributeValue} from "../../../attribute/SimpleAttribute";
import {ProjectClassName} from "../../../common/className/ClassName";
import {DataBookValue} from "../../DataBook";
import {ProjectBase, ProjectBaseFactory} from "../ProjectBase";

/**
 *  Организация и проведение масштабного мероприятия
 */
export interface EVENTProject extends ProjectBase {
    //className: ProjectClassName.EVENT;

    /**
     *  Тип мероприятия
     */
    event_Type: DataBookValue;

    /**
     *  Количество участников от
     */
    number_from: IntegerAttributeValue;

    /**
     * Количество участников до
     */
    number_to: IntegerAttributeValue;
}

export function EVENTProjectFactory(): EVENTProject {
    return {
        ...ProjectBaseFactory(ProjectClassName.EVENT),
        event_Type: createAttributeValue.Object(),
        number_from: createAttributeValue.Integer(),
        number_to: createAttributeValue.Integer(),
    };
}

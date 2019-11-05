import {createAttributeValue} from "../../../attribute/AttributeFactory";
import {StringAttributeValue} from "../../../attribute/SimpleAttribute";
import {ProjectClassName} from "../../../common/className/ClassName";
import {DataBookValue} from "../../DataBook";
import {ProjectBase, ProjectBaseFactory} from "../ProjectBase";

/**
 *  CONSTR_Cтроительство и реконструкция
 *  CONSTR
 */
export interface CONSTRProject extends ProjectBase {
    //className: ProjectClassName.CONSTR;

    /**
     * Вид строительства
     */
    construction_type: DataBookValue;

    /**
     * Объект строительства
     */
    constr_object: DataBookValue;

    /**
     * Адрес
     */
    adress: StringAttributeValue;

    /**
     * Реконструируемый объект
     */
    renov_object: DataBookValue;
}

export function CONSTRProjectFactory(): CONSTRProject {
    return {
        ...ProjectBaseFactory(ProjectClassName.CONSTR),
        construction_type: createAttributeValue.Object(),
        constr_object: createAttributeValue.Object(),
        adress: createAttributeValue.String(),
        renov_object: createAttributeValue.Object()
    };
}

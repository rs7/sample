import {StringAttributeValue} from "../../attribute/SimpleAttribute";
import {Entity} from "../../new/Entity";

/**
 * [ERP] Классификатор единиц измерения
 * DC-class: lims_unitsERP
 */
export interface LimsUnitsERP extends Entity {
    code: StringAttributeValue;
    title: StringAttributeValue;
    guid_ERP: StringAttributeValue;
}

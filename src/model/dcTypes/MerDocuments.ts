import {StringAttributeValue} from "../attribute/SimpleAttribute";
import {Entity} from "../new/Entity";

/**
 * [Меридиан] Задача/документ
 * mer_documents
 */
export interface MerDocuments extends Entity {
    subfield: StringAttributeValue;
    ectd_bio: StringAttributeValue;

    /**
     * Объекты
     */
    objects: StringAttributeValue;

    /**
     * Описание
     */
    opisaniye: StringAttributeValue;

    /**
     * Наименование eCTD
     */
    ectd: StringAttributeValue;

    /**
     * Наименование
     */
    title: StringAttributeValue;
}

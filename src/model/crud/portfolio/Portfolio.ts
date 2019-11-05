import {StringAttributeValue} from "../../attribute/SimpleAttribute";
import {Entity} from "../Entity";

/**
 * Портфель
 */
export interface Portfolio extends Entity {
    /**
     * Наименование
     */
    title: string;

    /**
     * Описание
     */
    description: StringAttributeValue;

    /**
     * Менеджер
     */
    manager: string;
    manager__title: string;
}

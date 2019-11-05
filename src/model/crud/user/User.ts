import {StringAttributeValue} from "../../attribute/SimpleAttribute";
import {Entity} from "../Entity";

/**
 *  Пользователь
 */
export interface User extends Entity {
    /**
     *  Должность
     */
    title: StringAttributeValue;

    /**
     * Логин
     */
    user_login: StringAttributeValue;
}

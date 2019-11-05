import {StringAttributeValue} from "../../attribute/SimpleAttribute";
import {Entity} from "../Entity";

/**
 *  Базовый класс программы
 */
export interface Program extends Entity {
    /**
     * Cсылка на техническое задание (ТЗ)
     */
    TSLink: string;

    /**
     * Cсылка на экспертную оценку (ОЭ)
     */
    EALink: string;

    /**
     * Ссылка на приказ об открытии/закрытии программы
     */
    link: string;

    /**
     * Кодировка
     */
    title: string;

    /**
     * Название программы
     */
    description: StringAttributeValue;

    /**
     * Статус программы
     */
    status: string;
    status__title: string;

    /**
     * Менеджер программы
     */
    manager1: string;
    manager1__title: string;

    /**
     * Выгоды
     */
    benefits: string;

    /**
     * Связь с портфелем
     */
    portfolio: string;
    portfolio__title: string;

    /**
     * Тип
     */
    type: string;
    type__title: string;
}

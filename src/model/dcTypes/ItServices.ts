import {BooleanAttributeValue, DateAttributeValue, StringAttributeValue} from "../attribute/SimpleAttribute";
import {DataBookValue} from "../new/DataBook";
import {Entity} from "../new/Entity";

/**
 * [Services] Информационные сервисы
 * itServices
 */
export interface ItServices extends Entity {
    /**
     * Стейкхолдеры
     */
    steakholders: StringAttributeValue;

    /**
     *
     */
    selfDevelopment: BooleanAttributeValue;

    /**
     *  Дата ввода в эксплуатацию
     */
    prodDate: DateAttributeValue;

    /**
     *  Статус
     */
    status: DataBookValue;

    /**
     *  Описание
     */
    description: StringAttributeValue;

    /**
     *  Договор
     */
    contract: StringAttributeValue;

    /**
     *  База знаний
     */
    knowledgeBase: StringAttributeValue;

    /**
     *  git-репозиторий
     */
    git: StringAttributeValue;

    /**
     *  Ссылка на контроль изменений
     */
    changeControl: StringAttributeValue;

    /**
     *  GxP
     */
    gxp: BooleanAttributeValue;

    /**
     *  Наименование
     */
    title: StringAttributeValue;
}

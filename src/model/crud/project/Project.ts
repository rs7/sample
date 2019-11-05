import {StringAttributeValue} from "../../attribute/SimpleAttribute";
import {Entity} from "../Entity";

export interface Project extends Entity {
    /**
     *  Кодировка
     */
    title: string;

    /**
     *  Название проекта
     */
    description: StringAttributeValue;

    programm: string;

    programm__title: string;

    /**
     *  Связь с родительским проектом
     */
    project: string;

    /**
     *  Связь с портфелем
     */
    portfolio: string;

    status: string;

    status__title: string;

    /**
     *  Ссылка на идею проекта в REPKA
     */
    ideaLink: string;

    projectType: string;

    projectType__title: string;

    menedzherproyekta: string;

    menedzherproyekta__title: string;

    projectStart: string;

    projectEnd: string;

    projectLinks: string;

    tag: string;
}


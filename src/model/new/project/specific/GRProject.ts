import {createAttributeValue} from "../../../attribute/AttributeFactory";
import {StringAttributeValue} from "../../../attribute/SimpleAttribute";
import {ProjectClassName} from "../../../common/className/ClassName";
import {DataBookValue} from "../../DataBook";
import {ProjectBase, ProjectBaseFactory} from "../ProjectBase";

/**
 *  Проект по совершенствованию законодательной среды
 */
export interface GRProject extends ProjectBase {
    //className: ProjectClassName.GR;

    /**
     *  Страна
     */
    country: DataBookValue;

    /**
     *  Тип нормативного правового акта
     */
    type: StringAttributeValue;

    /**
     *  Ссылка на предложение для регулирующих органов
     */
    link: StringAttributeValue;

    /**
     *  Ссылка на официальное решение регулирующих органов
     */
    link2: StringAttributeValue;
}

export function GRProjectFactory(): GRProject {
    return {
        ...ProjectBaseFactory(ProjectClassName.GR),
        country: createAttributeValue.Object(),
        type: createAttributeValue.String(),
        link: createAttributeValue.String(),
        link2: createAttributeValue.String(),
    };
}

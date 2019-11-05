import {createAttributeValue} from "../../attribute/AttributeFactory";
import {StringAttributeValue} from "../../attribute/SimpleAttribute";
import {VariousClassName} from "../../common/className/ClassName";
import {DataBookValue} from "../DataBook";
import {Entity, EntityFactory} from "../Entity";

export interface ProjectLink extends Entity {
    /**
     * Гиперссылка
     */
    link: StringAttributeValue;

    /**
     * Тип ссылки
     */
    linkType: DataBookValue;
}

export function ProjectLinkFactory(): ProjectLink {
    return {
        ...EntityFactory(VariousClassName.projectlinks),
        link: createAttributeValue.String(),
        linkType: createAttributeValue.Object(),
    };
}

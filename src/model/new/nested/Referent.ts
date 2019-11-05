import {createAttributeValue} from "../../attribute/AttributeFactory";
import {StringAttributeValue} from "../../attribute/SimpleAttribute";
import {VariousClassName} from "../../common/className/ClassName";
import {DataBookValue} from "../DataBook";
import {Entity, EntityFactory} from "../Entity";

/**
 * Референтный препарат
 */
export interface Referent extends Entity {
    /**
     * Ссылка на регистрационное удостоверение на сайте ГРЛС или FDA
     */
    link: StringAttributeValue;

    /**
     * Страна
     */
    country: DataBookValue;
}

export function ReferentFactory(): Referent {
    return {
        ...EntityFactory(VariousClassName.referents),
        country: createAttributeValue.Object(),
        link: createAttributeValue.String(),
    };
}

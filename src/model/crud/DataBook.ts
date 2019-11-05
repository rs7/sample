import {StringAttributeValue} from "../attribute/SimpleAttribute";
import {Entity} from "./Entity";

export interface DataBook extends Entity {
    title: StringAttributeValue;
}

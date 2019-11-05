import {Nullable} from "../../utils/types";
import {StringAttributeValue} from "../attribute/SimpleAttribute";
import {Entity} from "./Entity";

export interface DataBook extends Entity {
    title: StringAttributeValue;
}

export type DataBookValue = Nullable<DataBook>

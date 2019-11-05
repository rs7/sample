import {Nominal} from "../../utils/types";

export type BooleanAttributeValue = Nominal<boolean, "BooleanAttributeValue">;
export type DateAttributeValue = Nominal<string, "DateAttributeValue">;
export type IntegerAttributeValue = Nominal<number, "IntegerAttributeValue">;
export type FloatAttributeValue = Nominal<number, "FloatAttributeValue">;
export type StringAttributeValue = Nominal<string, "StringAttributeValue">;

export function createBooleanAttributeValue() {
    return false as BooleanAttributeValue;
}
export function createDateAttributeValue() {
    return null as DateAttributeValue;
}
export function createIntegerAttributeValue() {
    return 0 as IntegerAttributeValue;
}
export function createFloatAttributeValue() {
    return 0.0 as FloatAttributeValue;
}
export function createStringAttributeValue() {
    return "" as StringAttributeValue;
}

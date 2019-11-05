import {createBooleanAttributeValue, createDateAttributeValue, createFloatAttributeValue, createIntegerAttributeValue, createStringAttributeValue} from "./SimpleAttribute";

export const createAttributeValue = {
    Boolean: createBooleanAttributeValue,
    Date: createDateAttributeValue,
    Integer: createIntegerAttributeValue,
    Float: createFloatAttributeValue,
    String: createStringAttributeValue,
    Object: createObjectAttributeValue,
    ObjectList: createObjectListAttributeValue,
};

export function createObjectAttributeValue() {
    return null;
}
export function createObjectListAttributeValue() {
    return [];
}

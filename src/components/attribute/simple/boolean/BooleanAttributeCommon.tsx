import React from "react";
import {BooleanAttributeValue} from "../../../../model/attribute/SimpleAttribute";

const TrueLabel = "Да";
const FalseLabel = "Нет";

export function valueToLabel(value: BooleanAttributeValue): string {
    switch (value) {
        case true:
            return TrueLabel;
        case false:
            return FalseLabel;
    }
}

export function labelToValue(text: string): BooleanAttributeValue {
    switch (text) {
        case TrueLabel:
            return true as BooleanAttributeValue;
        case FalseLabel:
            return false as BooleanAttributeValue;
    }
}

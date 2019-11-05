import React from "react";
import {Validator} from "../../../../valid/Validation";
import {SimpleComponent} from "../../../Component";

export interface AttributeFieldProps<T> {
    title: string;
    value: T;
    onChange(value: T): void;
    validation?: Validator<T>[];
}

export type AttributeFieldComponent<T> = SimpleComponent<AttributeFieldProps<T>>;


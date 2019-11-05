import React from "react";
import {Suggest} from "./Suggest";

interface Props<T> {
    value: T[];
    onChange(value: T[]): void;

    identifyFunction(value: T): any;
    labelFunction(value: T): string;

    values: T[];

    multiple: boolean;
}

export function Select<T>(props: Props<T>) {
    let {value, onChange, values, identifyFunction, labelFunction, multiple} = props;

    function createOption(value: T): Option {
        return {
            label: labelFunction(value),
            value: identifyFunction(value),
        };
    }

    function suggestOnChange(selected: Option[]) {
        let value = selected.map(option => values.find(item => identifyFunction(item) === option.value));
        onChange(value);
    }

    let suggestOptions = values.map(createOption);

    let suggestSelected = value.map(createOption);

    return (
        <Suggest
            multiple={multiple}
            options={suggestOptions}
            selected={suggestSelected}
            onChange={suggestOnChange}
            labelFunction={option => option.label}
        />
    );
}

interface Option {
    label: string;
    value: string;
}

import {Dropdown as BCDDropdown} from "@vendor/bcd-front-ui-standalone";
import React from "react";
import styled from "styled-components";
import {undefinedToNull} from "../../../utils/common";

interface Props<T> {
    value: T;
    onChange(value: T): void;

    identifyFunction(value: T): any;
    labelFunction(value: T): string;

    values: T[];
}

export function Dropdown<T>(props: Props<T>) {

    let {value, onChange} = props;
    let {values, identifyFunction, labelFunction} = props;

    function createOption(value: T): Option {
        return {
            label: labelFunction(value),
            value: identifyFunction(value),
        };
    }

    function dropdownOnChange(value) {
        let selected = undefinedToNull(values.find(item => identifyFunction(item) === value));
        onChange(selected);
    }

    let dropdownOptions = values.map(createOption);

    let dropdownSelected = value && createOption(value);

    return (
        <StyledBCDDropdown
            options={dropdownOptions}
            onChange={dropdownOnChange}
            value={dropdownSelected}
        />
    );
}

const StyledBCDDropdown = styled(BCDDropdown)`
    width: 100%;
`;

interface Option {
    label: string;
    value: string;
}

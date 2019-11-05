import {Input as BCDInput} from "@vendor/bcd-front-ui-standalone";
import React from "react";
import styled from "styled-components";
import {EditorProps} from "../../../entity/editor/Editor";

interface Props extends EditorProps<string> {
    type: "text" | "number" | "date";
}

export function Input({value, type, onChange}: Props) {
    return (
        <StyledBCDInput
            type={type}
            value={value}
            onChange={event => onChange(event.currentTarget.value)}
        />
    );
}

export function TitleInput({value, type, onChange}: Props) {
    return (
        <StyledBCDInputTitle
            type={type}
            value={value}
            onChange={event => onChange(event.currentTarget.value)}
        />
    );
}

const StyledBCDInput = styled(BCDInput)`
    width: 100%;
    margin: 24px 0;
`;

const StyledBCDInputTitle = styled(BCDInput)`
    margin: 24px 0;
    font-size: 40px;
    width: 80%;
    height: 48px !important;
    max-height: 48px !important;
   
    
`;

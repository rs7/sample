import React, {ReactElement} from "react";
import styled from "styled-components";
import {DetailsInfoField} from "../../interfaceElements/DetailsInfoField";

export interface SimpleFieldProps {
    title: string;
    children: ReactElement;
}

export function SimpleField({children, title}: SimpleFieldProps) {
    return (
        <Field title={title}>
            {children}
        </Field>
    );
}

let Field = styled(DetailsInfoField)`
    width: 100%;
`;

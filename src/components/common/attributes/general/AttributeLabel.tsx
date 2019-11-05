import React from "react";
import styled from "styled-components";

interface Props {
    text: string;
}

export function AttributeLabel({text}: Props) {
    return <Container>{text}</Container>;
}

const Container = styled.div`
    padding: 5px;
`;

import {createGlobalStyle, css} from "styled-components";

const font = css`
    font-family: 'Open Sans', sans-serif;
`;

export const GlobalStyle = createGlobalStyle`
    ${font};

    h1, h2, h3, h4, .b-tooltip__content, .b-dropdown__label {
        ${font};
    }
`;

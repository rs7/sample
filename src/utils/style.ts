import {css} from "styled-components";

export const flexVerticalLayout = (gap: number) => css`
    display: flex;
    flex-direction: column;

    & > * { margin-bottom: ${gap}px; }    
    & > :last-child { margin-bottom: 0; }
`;

export const flexHorizontalLayout = (gap: number) => css`
    display: flex;
    flex-direction: row;

    & > * { margin-right: ${gap}px; }    
    & > :last-child { margin-right: 0; }
`;

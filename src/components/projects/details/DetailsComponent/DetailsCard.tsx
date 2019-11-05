import {Card} from "@vendor/bcd-front-ui-standalone";
import React from "react";
import styled from "styled-components";
import {flexVerticalLayout} from "../../../../utils/style";
import {bcdColors} from "../../../styles/variables/bcdColors";

const detailsContainerStyle = flexVerticalLayout(10);

export const DetailsCard1 = styled(Card)`
    width: 100%;
    padding: 24px;
    
    .b-card__content {
        ${detailsContainerStyle};
    }
    
    margin: 5px 0;
`;

export const DetailsCard2 = styled.div`
    width: 100%;
    padding: 10px;

    ${detailsContainerStyle};

    margin: 5px 0;
    border-radius: 4px;

    .theme-light & {
        background-color: ${bcdColors.grey200};
    }
    
    .theme-dark & {
        background-color: ${bcdColors.black};
    }
`;

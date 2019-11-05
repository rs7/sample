import React from "react";
import styled from "styled-components";
import {flexVerticalLayout} from "../../../../utils/style";

export function DetailsComponent({title, children, listMode, HeaderComponent, CardComponent}) {
    return (
        <Container>
            <HeaderComponent title={title}/>
            <Body>
                {
                    listMode
                        ? React.Children.toArray(children).filter(child => child).map((child, index) =>
                            <CardComponent children={child} key={index}/>
                        )
                        : <CardComponent children={children}/>
                }
            </Body>
        </Container>
    );
}

const Container = styled.div`
    width: 100%;
`;

const Body = styled.div`
    ${flexVerticalLayout(10)}
`;

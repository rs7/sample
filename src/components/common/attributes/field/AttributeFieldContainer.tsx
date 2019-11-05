import React, {ReactElement} from "react";
import {SimpleComponent} from "../../../Component";

export interface AttributeFieldContainerProps {
    title?: string;
    children: ReactElement;
}

export type AttributeFieldContainerComponent = SimpleComponent<AttributeFieldContainerProps>

import React from "react";
import {AttributeComponent} from "../general/Attribute";
import {AttributeFieldComponent, AttributeFieldProps} from "./AttributeField";
import {AttributeFieldContainerComponent} from "./AttributeFieldContainer";

export function createAttributeFieldComponent<T>(
    Attribute: AttributeComponent<T>,
    AttributeFieldContainer: AttributeFieldContainerComponent,
): AttributeFieldComponent<T> {

    return function (props: AttributeFieldProps<T>) {
        let {title, value, onChange} = props;
        return (
            <AttributeFieldContainer title={title}>
                <Attribute value={value} onChange={onChange}/>
            </AttributeFieldContainer>
        );
    };

}

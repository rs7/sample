import React from "react";
import {IntegerAttributeValue} from "../../../../model/attribute/SimpleAttribute";
import {AttributeLabel} from "../../../common/attributes/general/AttributeLabel";
import {ViewerProps} from "../../../../entity/viewer/Viewer";

export function IntegerAttributeViewer({value}: ViewerProps<IntegerAttributeValue>) {
    return <AttributeLabel text={value.toString()}/>;
}

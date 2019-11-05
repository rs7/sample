import React from "react";
import {BooleanAttributeValue} from "../../../../model/attribute/SimpleAttribute";
import {AttributeLabel} from "../../../common/attributes/general/AttributeLabel";
import {ViewerProps} from "../../../../entity/viewer/Viewer";
import {valueToLabel} from "./BooleanAttributeCommon";

export function BooleanAttributeViewer({value}: ViewerProps<BooleanAttributeValue>) {
    return <AttributeLabel text={valueToLabel(value)}/>;
}

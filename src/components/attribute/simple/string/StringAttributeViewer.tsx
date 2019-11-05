import React from "react";
import {StringAttributeValue} from "../../../../model/attribute/SimpleAttribute";
import {AttributeLabel} from "../../../common/attributes/general/AttributeLabel";
import {ViewerProps} from "../../../../entity/viewer/Viewer";

export function StringAttributeViewer({value}: ViewerProps<StringAttributeValue>) {
    return <AttributeLabel text={value}/>;
}

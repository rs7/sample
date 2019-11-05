import {formatDateTime} from "@vendor/bcd-front-ui-standalone";
import React from "react";
import {DateAttributeValue} from "../../../../model/attribute/SimpleAttribute";
import {AttributeLabel} from "../../../common/attributes/general/AttributeLabel";
import {ViewerProps} from "../../../../entity/viewer/Viewer";
import {to} from "./DateAttributeEditor";

export function DateAttributeViewer({value}: ViewerProps<DateAttributeValue>) {
    return <AttributeLabel text={valueToLabel(value)}/>;
}

function valueToLabel(value: DateAttributeValue): string {
    return formatDateTime(to(value));
}

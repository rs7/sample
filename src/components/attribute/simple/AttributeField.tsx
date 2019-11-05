import React from "react";
import {createSimpleAttributeFieldComponent} from "../../common/attributes/simple/SimpleAttributeHelper";
import {BooleanAttributeEditor} from "./boolean/BooleanAttributeEditor";
import {BooleanAttributeViewer} from "./boolean/BooleanAttributeViewer";
import {DateAttributeEditor} from "./date/DateAttributeEditor";
import {DateAttributeViewer} from "./date/DateAttributeViewer";
import {IntegerAttributeEditor} from "./integer/IntegerAttributeEditor";
import {IntegerAttributeViewer} from "./integer/IntegerAttributeViewer";
import {StringAttributeEditor} from "./string/StringAttributeEditor";
import {StringAttributeViewer} from "./string/StringAttributeViewer";

export const BooleanAttributeField = createSimpleAttributeFieldComponent(
    BooleanAttributeViewer,
    BooleanAttributeEditor,
);
export const DateAttributeField = createSimpleAttributeFieldComponent(
    DateAttributeViewer,
    DateAttributeEditor,
);
export const IntegerAttributeField = createSimpleAttributeFieldComponent(
    IntegerAttributeViewer,
    IntegerAttributeEditor,
);
export const StringAttributeField = createSimpleAttributeFieldComponent(
    StringAttributeViewer,
    StringAttributeEditor,
);

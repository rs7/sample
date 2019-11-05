import React from "react";
import {EditorComponent} from "../../../../entity/editor/Editor";
import {createMultiModeComponent} from "../../../../entity/MultiModeComponent";
import {ViewerComponent} from "../../../../entity/viewer/Viewer";
import {withNoValue} from "../../interfaceElements/noValue/withNoValue";
import {SimpleField} from "../container/SimpleField";
import {AttributeFieldComponent} from "../field/AttributeField";
import {createAttributeFieldComponent} from "../field/AttributeFieldHelper";
import {AttributeComponent} from "../general/Attribute";

export function createSimpleAttributeFieldComponent<T>(
    Viewer: ViewerComponent<T>,
    Editor: EditorComponent<T>,
): AttributeFieldComponent<T> {

    return createAttributeFieldComponent<T>(
        createAttributeComponentWithNoValue<T>(
            Viewer,
            Editor,
        ),
        SimpleField,
    );

}

function createAttributeComponentWithNoValue<T>(
    Viewer: ViewerComponent<T>,
    Editor: EditorComponent<T>,
): AttributeComponent<T> {

    return createMultiModeComponent<T>(
        withNoValue(Viewer),
        Editor,
    );

}

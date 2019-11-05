import React from "react";
import {EditorProps} from "../../../../entity/editor/Editor";
import {createMultiModeComponent} from "../../../../entity/MultiModeComponent";
import {ViewerProps} from "../../../../entity/viewer/Viewer";
import {VariousClassName} from "../../../../model/common/className/ClassName";
import {DataBookValue} from "../../../../model/new/DataBook";
import {SimpleField} from "../container/SimpleField";
import {createAttributeFieldComponent} from "../field/AttributeFieldHelper";
import {DictionaryAdditionalProps} from "./DictionaryAttributeCommon";
import {DictionaryAttributeEditor} from "./DictionaryAttributeEditor";
import {DictionaryAttributeViewer} from "./DictionaryAttributeViewer";

export function createDictionaryAttributeFieldComponent(className: VariousClassName) {
    return createAttributeFieldComponent(
        createDictionaryAttributeComponent({className}),
        SimpleField,
    );
}

function createDictionaryAttributeComponent({className, criteria}: DictionaryAdditionalProps) {

    let Viewer = ({value}: ViewerProps<DataBookValue>) => <DictionaryAttributeViewer value={value}/>;
    let Editor = ({value, onChange}: EditorProps<DataBookValue>) => <DictionaryAttributeEditor value={value} onChange={onChange} className={className} criteria={criteria}/>;

    return createMultiModeComponent<DataBookValue>(Viewer, Editor);
}

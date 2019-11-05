import React from "react";
import {EditorProps} from "../../../../entity/editor/Editor";
import {createMultiModeComponent} from "../../../../entity/MultiModeComponent";
import {ViewerProps} from "../../../../entity/viewer/Viewer";
import {VariousClassName} from "../../../../model/common/className/ClassName";
import {DataBookValue} from "../../../../model/new/DataBook";
import {SimpleField} from "../container/SimpleField";
import {createAttributeFieldComponent} from "../field/AttributeFieldHelper";
import {DictionaryAdditionalProps} from "./DictionaryAttributeCommon";
import {DictionaryListAttributeEditor} from "./DictionaryListAttributeEditor";
import {DictionaryListAttributeViewer} from "./DictionaryListAttributeViewer";

export function createDictionaryListAttributeFieldComponent(className: VariousClassName) {
    return createAttributeFieldComponent(
        createDictionaryListAttributeComponent({className}),
        SimpleField,
    );
}

function createDictionaryListAttributeComponent({className, criteria}: DictionaryAdditionalProps) {

    let Viewer = ({value}: ViewerProps<DataBookValue[]>) => <DictionaryListAttributeViewer value={value}/>;
    let Editor = ({value, onChange}: EditorProps<DataBookValue[]>) => <DictionaryListAttributeEditor value={value} onChange={onChange} className={className} criteria={criteria}/>;

    return createMultiModeComponent<DataBookValue[]>(Viewer, Editor);
}

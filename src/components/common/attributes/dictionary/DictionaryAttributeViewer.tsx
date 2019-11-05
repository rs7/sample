import React from "react";
import {DataBookValue} from "../../../../model/new/DataBook";
import {ViewerProps} from "../../../../entity/viewer/Viewer";
import {withNoValue} from "../../interfaceElements/noValue/withNoValue";
import {AttributeLabel} from "../general/AttributeLabel";

export const DictionaryAttributeViewer = withNoValue(DictionaryAttributeViewerRaw);

function DictionaryAttributeViewerRaw({value}: ViewerProps<DataBookValue>) {
    return <AttributeLabel text={value.title}/>;
}

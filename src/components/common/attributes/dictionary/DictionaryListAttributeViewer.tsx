import React from "react";
import {DataBookValue} from "../../../../model/new/DataBook";
import {listIsEmpty} from "../../../../utils/list";
import {ViewerProps} from "../../../../entity/viewer/Viewer";
import {NoValue} from "../../interfaceElements/InterfaceBlocks";
import {withEmptyListNoValue, withNoValue} from "../../interfaceElements/noValue/withNoValue";
import {AttributeLabel} from "../general/AttributeLabel";

export const DictionaryListAttributeViewer = withNoValue(withEmptyListNoValue(DictionaryListAttributeViewerRaw));

function DictionaryListAttributeViewerRaw({value}: ViewerProps<DataBookValue[]>) {
    if (listIsEmpty(value)) return <NoValue/>;

    let text = valueToTitleList(value).join(", ");

    return <AttributeLabel text={text}/>;
}

function valueToTitleList(value: DataBookValue[]): string[] {
    return value.map(value => value.title);
}

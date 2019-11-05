import {Loader} from "@vendor/bcd-front-ui-standalone";
import React from "react";
import {EditorProps} from "../../../../entity/editor/Editor";
import {Select} from "../../controls/Select";
import {DictionaryAdditionalProps} from "./DictionaryAttributeCommon";
import {DictionaryItem} from "./DictionaryConfig";
import {useDictionaryList} from "./useDictionaryList";

type DictionaryListEditorProps = EditorProps<DictionaryItem[]> & DictionaryAdditionalProps;

export function DictionaryListAttributeEditor({value, onChange, className, criteria}: DictionaryListEditorProps) {

    let {list, titleFunction, identifyFunction} = useDictionaryList(className, criteria);

    if (list === undefined) return <Loader/>;

    return (
        <Select
            multiple={true}
            values={list}
            onChange={onChange}
            value={value}
            labelFunction={titleFunction}
            identifyFunction={identifyFunction}
        />
    );
}

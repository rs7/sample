import {Loader} from "@vendor/bcd-front-ui-standalone";
import React from "react";
import {oneItemList, oneItemListValue} from "../../../../utils/list";
import {EditorProps} from "../../../../entity/editor/Editor";
import {Dropdown} from "../../controls/Dropdown";
import {Select} from "../../controls/Select";
import {DictionaryAdditionalProps} from "./DictionaryAttributeCommon";
import {useDictionaryList} from "./useDictionaryList";

type DictionaryEditorProps<T> = EditorProps<T> & DictionaryAdditionalProps;

export function DictionaryAttributeEditor<T>({value, onChange, className, criteria}: DictionaryEditorProps<T>) {

    let {list, titleFunction, identifyFunction} = useDictionaryList(className, criteria);

    if (list === undefined) return <Loader/>;

    if (list.length < 20) return (
        <Dropdown
            values={list}
            onChange={onChange}
            value={value}
            labelFunction={titleFunction}
            identifyFunction={identifyFunction}
        />
    );

    return (
        <Select
            multiple={false}
            values={list}
            onChange={value => onChange(oneItemListValue(value))}
            value={oneItemList(value)}
            labelFunction={titleFunction}
            identifyFunction={identifyFunction}
        />
    );
}

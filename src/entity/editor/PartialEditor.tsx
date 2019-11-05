import React from "react";
import {SimpleComponent} from "../../components/Component";
import {EditorComponent, EditorProps} from "./Editor";
import {createPartialChange, OnPartialChange} from "./PartialOnChange";

export interface PartialEditorProps<T> {
    value: T;
    onPartialChange: OnPartialChange<T>;
}

export type PartialEditorComponent<T> = SimpleComponent<PartialEditorProps<T>>

export function createEditorComponent<T>(
    PartialEditor: PartialEditorComponent<T>
): EditorComponent<T> {

    return function (props: EditorProps<T>) {
        let {value, onChange} = props;

        let onPartialChange = createPartialChange(value, onChange);

        return <PartialEditor value={value} onPartialChange={onPartialChange}/>;
    };

}

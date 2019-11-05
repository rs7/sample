import React from "react";
import {EditorComponent, EditorProps} from "./Editor";
import {Converter} from "../Converter";

interface Props<OuterType, InnerType> extends EditorProps<OuterType> {
    children: EditorComponent<InnerType>;
    inToOut: Converter<InnerType, OuterType>;
    outToIn: Converter<OuterType, InnerType>;
}

export function EditorConverter<OuterType, InnerType>({children: Editor, inToOut, outToIn, value, onChange}: Props<OuterType, InnerType>) {
    return (
        <Editor
            value={outToIn(value)}
            onChange={value => onChange(inToOut(value))}
        />
    );
}

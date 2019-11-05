import React, {useState} from "react";
import {cloneObject} from "../../utils/immutable";
import {EditorProps} from "./Editor";

interface API<T> {
    value: T;
    onChange(value: T): void;
    commit(): void;
    reset(): void;
}

export function useEditBuffer<T>(props: EditorProps<T>): API<T> {
    let [value, setValue] = useState(props.value);

    return {
        value,
        onChange(value: T): void {
            setValue(value);
        },
        commit(): void {
            props.onChange(value);
        },
        reset(): void {
            setValue(cloneObject(props.value));
        }
    };
}

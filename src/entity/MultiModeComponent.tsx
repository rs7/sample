import React from "react";
import {Test} from "../components/common/interfaceElements/placeholder/Test";
import {EditorComponent} from "./editor/Editor";
import {OnChange} from "./editor/OnChange";
import {Mode} from "./Mode";
import {useMode} from "./ModeContext";
import {ViewerComponent} from "./viewer/Viewer";

export function createMultiModeComponent<T>(
    Viewer: ViewerComponent<T>,
    Editor: EditorComponent<T>,
) {

    return function ({
        value, onChange,
    }: {
        value: T,
        onChange: OnChange<T>,
    }) {
        return (
            <MultiModeComponent
                value={value}
                onChange={onChange}
                Viewer={Viewer}
                Editor={Editor}
            />
        );
    };

}

export function MultiModeComponent<T>({
    value, onChange, Viewer, Editor
}: {
    value: T,
    onChange: OnChange<T>,
    Viewer: ViewerComponent<T>,
    Editor: EditorComponent<T>,
}) {
    let mode = useMode();

    switch (mode) {
        case Mode.Edit:
            return <Editor value={value} onChange={onChange}/>;

        case Mode.View:
            return <Viewer value={value}/>;

        case Mode.Test:
            return <Test/>;
    }
}

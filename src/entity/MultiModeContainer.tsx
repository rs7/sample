import {Button} from "@vendor/bcd-front-ui-standalone";
import {faPencilAlt} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import React, {useState} from "react";
import styled from "styled-components";
import {bcdColors} from "../components/styles/variables/bcdColors";
import {indents} from "../components/styles/variables/indents";
import {flexHorizontalLayout, flexVerticalLayout} from "../utils/style";
import {ValidationProvider} from "../valid/Validation";
import {useEditBuffer} from "./editor/EditBuffer";
import {EditorComponent, EditorProps} from "./editor/Editor";
import {Mode} from "./Mode";
import {ModeProvider} from "./ModeContext";

interface Props<T> extends EditorProps<T> {
    children: EditorComponent<T>;
    initialMode?: Mode;
    canEdit: boolean;
}

export function MultiModeContainer<T>(props: Props<T>) {
    let [mode, setMode] = useState(props.initialMode || Mode.View);

    let Editor = props.children;

    let {value, onChange, reset, commit} = useEditBuffer({
        value: props.value,
        onChange: props.onChange,
    });

    let onEdit = () => {
        setMode(Mode.Edit);
    };

    let onSave = () => {
        commit();
        setMode(Mode.View);
    };

    let onCancel = () => {
        reset();
        setMode(Mode.View);
    };

    const editMode = mode === Mode.Edit;
    const viewMode = mode === Mode.View;

    let [valid, setValid] = useState(false);

    return (
        <Container>
            <ValidationProvider onValidation={setValid}>
                <ControlPanel>
                    {props.canEdit && viewMode && <EditButton onClick={onEdit}><FontAwesomeIcon icon={faPencilAlt}/></EditButton>}
                    {editMode && <Button text={"Сохранить"} onAction={onSave} view={"primary"} disabled={!valid}/>}
                    {editMode && <Button text={"Отменить"} onAction={onCancel}/>}
                </ControlPanel>
                <ModeProvider value={mode}>
                    <Editor
                        value={value}
                        onChange={onChange}
                    />
                </ModeProvider>
            </ValidationProvider>
        </Container>
    );
}

const Container = styled.div`
    width: 100%;
    ${flexVerticalLayout(15)};
`;

const ControlPanel = styled.div`
    ${flexHorizontalLayout(5)};
    padding: ${indents.indent6};
    position: fixed;
    right: 0;
    z-index: 100000;
`;

const EditButton = styled.div`
    font-size: 20px;
    &:hover {
      color: ${bcdColors.green}
      cursor: pointer;
    }
`;

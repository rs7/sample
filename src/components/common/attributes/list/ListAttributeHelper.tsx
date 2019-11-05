import React from "react";
import {listAdd} from "../../../../utils/immutable";
import {Mode} from "../../../../entity/Mode";
import {createEditorComponent, PartialEditorComponent} from "../../../../entity/editor/PartialEditor";
import {useMode} from "../../../../entity/ModeContext";
import {NoValue} from "../../interfaceElements/InterfaceBlocks";
import {NoValid} from "../../interfaceElements/placeholder/NoValid";
import {InnerCard} from "../container/InnerCard";
import {AttributeFieldComponent, AttributeFieldProps} from "../field/AttributeField";
import {AttributeComponent} from "../general/Attribute";
import {ListAttribute} from "./ListAttribute";
import {AddButton, formListComponents} from "./ListAttributeCommon";
import styled from "styled-components";

type ListComponentProps<T> = AttributeFieldProps<ListAttribute<T>> & {addButtonLabel?: string};

export function createCompositeListAttributeFieldComponent<T>(
    Partial: PartialEditorComponent<T>,
    factory: () => T,
): AttributeFieldComponent<ListAttribute<T>> {

    return createListAttributeFieldComponentInMainStyle<T>(
        createEditorComponent(Partial),
        factory,
    );
}

export function createLinksListComponent<T>(
    Partial: PartialEditorComponent<T>,
    factory: () => T,
): AttributeFieldComponent<ListAttribute<T>> {

    return createListAttributeFieldComponentInSideStyle<T>(
        createEditorComponent(Partial),
        factory,
    );
}

function createListAttributeFieldComponentInMainStyle<T>(
    Attribute: AttributeComponent<T>,
    factory: () => T,
): AttributeFieldComponent<ListAttribute<T>> {

    return function (props:  ListComponentProps<T>) {
        let {title, value, onChange, addButtonLabel = 'Добавить'} = props;

        if (!value) return <NoValid/>;

        let editMode = useMode() == Mode.Edit;
        let viewMode = useMode() == Mode.View;

        let onAdd = () => onChange(listAdd(value, factory()));

        return <>
            <InnerCard title={title} listMode={true}>
                {
                    viewMode && !(value && value.length) && <NoValue/>
                }
                {formListComponents(value, onChange, Attribute, editMode)}
            </InnerCard>
            {
                editMode &&
                <div style={{paddingTop: '20px'}}>
                    <AddButton title={addButtonLabel} onClick={() => onAdd()}/>
                </div>
            }
        </>;
    };
}

function createListAttributeFieldComponentInSideStyle<T>(
    Attribute: AttributeComponent<T>,
    factory: () => T,
): AttributeFieldComponent<ListAttribute<T>> {

    return function (props:  ListComponentProps<T>) {
        let {title, value, onChange, addButtonLabel = 'Добавить'} = props;

        if (!value) return <NoValid/>;

        let editMode = useMode() == Mode.Edit;
        let viewMode = useMode() == Mode.View;

        let onAdd = () => onChange(listAdd(value, factory()));

        return <>
            <InnerCard listMode={true}>
                <CardHeader>{title}</CardHeader>
                {
                    viewMode && !(value && value.length) && <NoValue/>
                }
                {formListComponents(value, onChange, Attribute, editMode)}
                {
                    editMode &&
                    <AddButton title={addButtonLabel} onClick={() => onAdd()}/>
                }
            </InnerCard>
        </>;
    };
}

const CardHeader = styled.div`
padding-top: 10px;
color: white;
margin-bottom: 0;
font-size: 20px;
`;

import {Button} from "@vendor/bcd-front-ui-standalone";
import {faPlus, faTimes} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import styled from "styled-components";
import {listItem, listRemove} from "../../../../utils/immutable";

export function AddButton({title, onClick}: {title: string, onClick: () => {}}) {
    return (
        <AddButtonWrapper>
            <Button icon={faPlus} text={title} view="secondary" onAction={() => onClick()}/>
        </AddButtonWrapper>
    );
}

export function RemoveButton({title, onClick}: {title: string, onClick: () => {}}) {
    return (
        <Button className={"remove-button"} size={"L"} icon={faTimes} text={title} view="pseudo" onAction={() => onClick()}/>
    );
}

export function formListComponents<T>(value: T, onChange: (value: T) => void, Attribute: any, editMode: boolean) {
    let onDelete = index => onChange(listRemove(value, index));
    let onItem = (index, item) => onChange(listItem(value, index, item));
    return (
        value.map((item, index) => (
            <ItemWrapper key={index}>
                {
                    editMode &&
                    <RemoveButton onClick={() => onDelete(index)}/>
                }
                <Attribute
                    value={item}
                    onChange={value => onItem(index, value)}
                />
            </ItemWrapper>
        ))
    );
}

const ItemWrapper = styled.div`
    position: relative;
        .remove-button{
            position: absolute;
            top: -10px;
            right: -5px;
        }    
`;

const AddButtonWrapper = styled.div`
    width: 'fit-content';
`;

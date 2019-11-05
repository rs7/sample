import React from "react";
import {DetailsCard1, DetailsCard2} from "./DetailsCard";
import {DetailsComponent} from "./DetailsComponent";
import {DetailsHeader1, DetailsHeader2} from "./DetailsHeader";

export function DetailsComponent1({title, children, listMode}) {
    return <DetailsComponent title={title} children={children} listMode={listMode} HeaderComponent={DetailsHeader1} CardComponent={DetailsCard1}/>;
}

export function DetailsComponent2({title, children, listMode}) {
    return <DetailsComponent title={title} children={children} listMode={listMode} HeaderComponent={DetailsHeader2} CardComponent={DetailsCard2}/>;
}

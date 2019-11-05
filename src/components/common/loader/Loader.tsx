import React, {ReactNode, useState} from "react";
import {useComponentDidMount} from "../../../utils/react-helper";
import {CenteredLoader} from "../interfaceElements/InterfaceBlocks";

interface Props<T> {
    loader(): Promise<T>;
    children(value: T): ReactNode;
}

function Loadable<T>(props: Props<T>) {
    let [value, setValue] = useState<T | undefined>(undefined);

    useComponentDidMount(async () => {
        setValue(await props.loader());
    });

    if (value === undefined) return <CenteredLoader/>;

    return props.children(value);
}

import {ReactElement} from "react";

export interface SimpleComponent<P> {
    (props: P): ReactElement;
}

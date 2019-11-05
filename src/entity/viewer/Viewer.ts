import {SimpleComponent} from "../../components/Component";

export type ViewerProps<T> = {
    value: T;
}

export type ViewerComponent<T> = SimpleComponent<ViewerProps<T>>

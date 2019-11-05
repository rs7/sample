import {SimpleComponent} from "../../components/Component";
import {OnChange} from "./OnChange";

export interface EditorProps<T> {
    value: T;
    onChange: OnChange<T>;
}

export type EditorComponent<T> = SimpleComponent<EditorProps<T>>;

import {objectPartialChange} from "../../utils/immutable";
import {OnChange} from "./OnChange";

export type OnPartialChange<T> = OnChange<Partial<T>>;

export function createPartialChange<T>(value: T, onChange: OnChange<T>): OnPartialChange<T> {
    return function (partial: Partial<T>) {
        return onChange(objectPartialChange(value, partial));
    };
}

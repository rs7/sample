import {Nominal} from "../../../utils/types";
import {ClassName} from "../className/ClassName";

export type GUID = Nominal<string, "GUID">
export type GUIDWithClassName = Nominal<string, "GUIDWithClassName">

export function createGUIDWithClassName(className: ClassName): GUIDWithClassName {
    return `@${className}` as GUIDWithClassName;
}

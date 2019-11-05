import {ClassName} from "./className/ClassName";
import {GUID} from "./guid/GUID";

export type ExtendedEntity<T> = T & ExtendEntity;

export interface ExtendEntity {
    className: ClassName;
    guidRaw: GUID;
}

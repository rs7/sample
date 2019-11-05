import {ClassName} from "../common/className/ClassName";
import {ExtendedEntity, ExtendEntity} from "../common/ExtendEntity";
import {GUID} from "../common/guid/GUID";
import {Entity} from "./Entity";

export function extendEntity<T extends Entity>(object: T): ExtendedEntity<T> {
    Object.setPrototypeOf(object, ExtendPrototype);
    return object as ExtendedEntity<T>;
}

const ExtendPrototype: ExtendEntity = {
    get className() { return (this as Entity).guid.split("@")[1] as ClassName; },
    get guidRaw() { return (this as Entity).guid.split("@")[0] as GUID; }
};

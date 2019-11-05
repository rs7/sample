import {ClassName} from "../common/className/ClassName";
import {createGUIDWithClassName, GUIDWithClassName} from "../common/guid/GUID";

export interface Entity {
    guid: GUIDWithClassName;
}

export function EntityFactory(className: ClassName) {
    return {
        guid: createGUIDWithClassName(className),
    };
}

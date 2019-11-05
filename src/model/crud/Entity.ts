import {EntityID} from "../common/Entity";
import {GUID} from "../common/guid/GUID";

export interface Entity {
    guid: GUID;
    id: EntityID;
}

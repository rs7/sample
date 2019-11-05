import {ProjectTypeCode} from "../../common/className/ClassName";
import {Entity} from "../Entity";

export interface ProjectType extends Entity {
    code: ProjectTypeCode;

    title: string;
}

import {Entity} from "../../crud/Entity";
import {DataBookValue} from "../../new/DataBook";

/**
 *  Проектные команды
 *  project_teams
 */
export interface ProjectTeams extends Entity {
    /**
     *  Сотрудник
     */
    user: DataBookValue;

    /**
     *  Роль в команде
     */
    team_roles: DataBookValue;
}

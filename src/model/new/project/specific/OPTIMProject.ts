import {ProjectClassName} from "../../../common/className/ClassName";
import {ProjectBase, ProjectBaseFactory} from "../ProjectBase";

/**
 * Проект по оптимизации и выбору финальных кандидатов
 */
export interface OPTIMProject extends ProjectBase {
    //className: ProjectClassName.OPTIM;
}

export function OPTIMProjectFactory(): OPTIMProject {
    return {
        ...ProjectBaseFactory(ProjectClassName.OPTIM),
    };
}

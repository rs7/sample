import {createAttributeValue} from "../../../attribute/AttributeFactory";
import {ProjectClassName} from "../../../common/className/ClassName";
import {TestSystem} from "../../nested/TestSystem";
import {ProjectBase, ProjectBaseFactory} from "../ProjectBase";

/**
 * Разработка тест-системы
 */
export interface TSDProject extends ProjectBase {
    //className: ProjectClassName.TSD;

    /**
     * Тест системы
     */
    test_system: TestSystem[];
}

export function TSDProjectFactory(): TSDProject {
    return {
        ...ProjectBaseFactory(ProjectClassName.TSD),
        test_system: createAttributeValue.ObjectList(),
    };
}

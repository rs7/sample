import {VariousClassName} from "../../model/common/className/ClassName";
import {Entity} from "../../model/crud/Entity";
import {Criteria, crudAPI} from "./crudAPI";

export const apiH = {
    getFullListWithCriteria,
};

/**
 * Получает полный многостранничный список
 * Отправляет сначала запрос на определение общего количества сущностей
 * затем отправляет запросы на все страницы и собирает результат в единый ответ
 */
async function getFullListWithCriteria<T extends Entity>(className: VariousClassName, criteria: Criteria): Promise<T[]> {

    let totalRequest = crudAPI.select<T>({
        class: className,
        criteria,
        pageSize: 1,
    });

    let total = (await totalRequest).total;
    let totalPages = Math.ceil(total / crudAPI.MaxPageSize);
    let pages = Array.from(Array(totalPages), (_, index) => 1 + index);

    let requests = pages.map(page => crudAPI.select<T>({
        class: className,
        criteria,
        pageSize: crudAPI.MaxPageSize,
        page,
    }));

    let totalList = (await Promise.all(requests)).reduce(
        (totalList, {list}) => totalList.concat(list), []
    );

    return totalList;
}

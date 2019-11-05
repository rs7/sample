import React, {useState} from "react";
import {VariousClassName} from "../../../../model/common/className/ClassName";
import {apiH} from "../../../../service/api/apiH";
import {Criteria} from "../../../../service/api/crudAPI";
import {useComponentDidMount} from "../../../../utils/react-helper";
import {getConfig} from "./DictionaryConfig";

/**
 * Здесь очень сложно с типами, поэтому недоделано
 */

export interface DictionaryListAPI<ItemType> {
    list: ItemType[];
    titleFunction(item: ItemType): string;
    identifyFunction(item: ItemType): any;
}

export function useDictionaryList(className: VariousClassName, criteria: Criteria): DictionaryListAPI<any> {
    let config = getConfig(className);

    let {
        sourceFunction,
        titleFunction,
        identifyFunction,
    } = config;

    let [list, setList] = useState(undefined);

    useComponentDidMount(async () => {
        let crudItemList = await apiH.getFullListWithCriteria(className, criteria);

        let dictionaryList = crudItemList.map(sourceFunction);

        setList(dictionaryList);
    });

    return {list, titleFunction, identifyFunction};
}


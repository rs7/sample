import React from "react";
import {VariousClassName} from "../../../../model/common/className/ClassName";
import {Criteria} from "../../../../service/api/crudAPI";

export interface DictionaryAdditionalProps {
    className: VariousClassName;
    criteria?: Criteria;
}

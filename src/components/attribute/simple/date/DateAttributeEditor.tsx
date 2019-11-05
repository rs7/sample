import React from "react";
import {DateAttributeValue} from "../../../../model/attribute/SimpleAttribute";
import {parseDateWithoutOffset} from "../../../../utils/date";
import {DatePicker} from "../../../common/controls/DatePicker";
import {EditorProps} from "../../../../entity/editor/Editor";
import {EditorConverter} from "../../../../entity/editor/EditorConverter";

export function DateAttributeEditor({value, onChange}: EditorProps<DateAttributeValue>) {
    return (
        <EditorConverter value={value} onChange={onChange} outToIn={to} inToOut={from}>
            {DatePicker}
        </EditorConverter>
    );
}

export function to(value: DateAttributeValue): Date | undefined {
    return value? parseDateWithoutOffset(value) : undefined ;
}

export function from(value: Date): DateAttributeValue | undefined {
    if(!value) return undefined;
    let year = value.getFullYear();
    let month = (value.getMonth() + 1).toString().padStart(2, "0");
    let date = value.getDate().toString().padStart(2, "0");

    return `${year}-${month}-${date} 00:00:00` as DateAttributeValue;

    // Формат представления даты в API: 2019-01-30 00:00:00
}

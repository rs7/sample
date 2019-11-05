import {Datepicker} from "@vendor/bcd-front-ui-standalone";
import React from "react";
import {EditorProps} from "../../../entity/editor/Editor";

export function DatePicker({value, onChange}: EditorProps<Date>) {
    return (
        <Datepicker
            date={value}
            onChange={onChange}
        />
    );
}

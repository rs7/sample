import React from "react";
import {TestSystem} from "../../../../model/new/nested/TestSystem";
import {PartialEditorProps} from "../../../../entity/editor/PartialEditor";
import {MethodAttributeField, SampleTypeAttributeField, TimePeriodsAttributeField} from "../../dictionary/AttributeField";
import {IntegerAttributeField} from "../../simple/AttributeField";

export function TestSystemPartial({value, onPartialChange}: PartialEditorProps<TestSystem>) {
    return <>
        <SampleTypeAttributeField
            title={`Тип образца`}
            value={value.sample_type}
            onChange={sample_type => onPartialChange({sample_type})}
        />

        <IntegerAttributeField
            title={`Время до получения результата`}
            value={value.time_to_result}
            onChange={time_to_result => onPartialChange({time_to_result})}
        />

        <TimePeriodsAttributeField
            title={`Единица измерения времени`}
            value={value.time}
            onChange={time => onPartialChange({time})}
        />

        <IntegerAttributeField
            title={`Число этапов`}
            value={value.number_of_stages}
            onChange={number_of_stages => onPartialChange({number_of_stages})}
        />

        <MethodAttributeField
            title={`Метод`}
            value={value.test_method}
            onChange={test_method => onPartialChange({test_method})}
        />
    </>;
}

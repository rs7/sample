import React from "react";
import {EVENTProject} from "../../../../model/new/project/specific/EVENTProject";
import {EventTypeAttributeField} from "../../../attribute/dictionary/AttributeField";
import {IntegerAttributeField} from "../../../attribute/simple/AttributeField";
import {InnerCard} from "../../../common/attributes/container/InnerCard";
import {createPartialChange} from "../../../../entity/editor/PartialOnChange";
import {ProjectProps} from "../../ProjectProps";

export function EVENTProjectDetails({value, onChange}: ProjectProps<EVENTProject>) {
    let onPartialChange = createPartialChange(value, onChange);

    return <>
        <InnerCard>
            <IntegerAttributeField
                title={`Количество участников до`}
                value={value.number_to}
                onChange={number_to => onPartialChange({number_to})}
            />

            <IntegerAttributeField
                title={`Количество участников от`}
                value={value.number_from}
                onChange={number_from => onPartialChange({number_from})}
            />

            <EventTypeAttributeField
                title={`Тип мероприятия`}
                value={value.event_Type}
                onChange={event_Type => onPartialChange({event_Type})}
            />
        </InnerCard>
    </>;

}

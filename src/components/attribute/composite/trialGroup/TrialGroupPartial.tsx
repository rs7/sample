import React from "react";
import {TrialGroup} from "../../../../model/new/nested/TrialGroup";
import {PartialEditorProps} from "../../../../entity/editor/PartialEditor";
import {IntegerAttributeField, StringAttributeField} from "../../simple/AttributeField";
import {DosageRegimenListAttributeField} from "../AttributeField";

export function TrialGroupPartial({value, onPartialChange}: PartialEditorProps<TrialGroup>) {
    return <>
        <StringAttributeField
            title={`Наименование`}
            value={value.title}
            onChange={title => onPartialChange({title})}
        />

        <IntegerAttributeField
            title={`Линия терапии`}
            value={value.therapyLine}
            onChange={therapyLine => onPartialChange({therapyLine})}
        />

        <IntegerAttributeField
            title={`Количество наблюдаемых`}
            value={value.ParticipantsNumber}
            onChange={ParticipantsNumber => onPartialChange({ParticipantsNumber})}
        />

        <DosageRegimenListAttributeField
            title={`Режим дозирования`}
            value={value.dosageRegimen}
            onChange={dosageRegimen => onPartialChange({dosageRegimen})}
        />
    </>;
}

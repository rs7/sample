import React from "react";
import {ProjectLink} from "../../../../model/new/nested/ProjectLink";
import {PartialEditorProps} from "../../../../entity/editor/PartialEditor";
import {LinkTypeListAttributeField} from "../../dictionary/AttributeField";
import {StringAttributeField} from "../../simple/AttributeField";

export function ProjectLinkPartial({value, onPartialChange}: PartialEditorProps<ProjectLink>) {
    return <>
        <LinkTypeListAttributeField
            title={`Тип ссылки`}
            value={value.linkType}
            onChange={linkType => onPartialChange({linkType})}
        />
        <StringAttributeField
            title={`HTTPS адрес ссылки`}
            value={value.link}
            onChange={link => onPartialChange({link})}
        />
    </>;
}

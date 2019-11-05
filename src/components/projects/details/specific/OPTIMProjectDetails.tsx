import React from "react";
import {OPTIMProject} from "../../../../model/new/project/specific/OPTIMProject";
import {createPartialChange} from "../../../../entity/editor/PartialOnChange";
import {ProjectProps} from "../../ProjectProps";

export function OPTIMProjectDetails({value, onChange}: ProjectProps<OPTIMProject>) {
    let onPartialChange = createPartialChange(value, onChange);

    return <></>;
}

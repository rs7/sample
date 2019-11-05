import React from "react";
import {SpecificProject} from "../../model/new/project/SpecificProject";
import {EditorProps} from "../../entity/editor/Editor";

export type ProjectProps<T extends SpecificProject> = EditorProps<T>;

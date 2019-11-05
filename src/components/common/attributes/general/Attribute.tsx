import React from "react";
import {SimpleComponent} from "../../../Component";
import {EditorProps} from "../../../../entity/editor/Editor";

export type AttributeProps<T> = EditorProps<T>;

export type AttributeComponent<T> = SimpleComponent<AttributeProps<T>>;

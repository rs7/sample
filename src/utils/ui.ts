import {simpleRandomID} from "./id";

export function createRadioGroupName() {
    return `radioGroup_${simpleRandomID()}`;
}

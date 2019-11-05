import React, {ReactElement, ReactNode, useContext, useState} from "react";
import {listAdd} from "../utils/immutable";

export interface Validator<T = any> {
    (value: T): boolean;
}

function NotNullValidator<T>(value: T): boolean {
    return value != null;
}

export function Validation<T>({
    value, validators, children
}: {
    value: T,
    validators: Validator<T>[],
    children(valid: boolean): ReactElement,
}) {
    let valid = validators.every(validator => validator(value));
    return children(valid);
}

interface ValidationAPI {
    addValidator(validator: Validator<any>): void;
}

const ValidationContext = React.createContext<ValidationAPI | undefined>(undefined);

export function ValidationProvider({
    onValidation, children
}: {
    onValidation(valid: boolean): void,
    children: ReactNode,
}) {
    let [validators, setValidators] = useState<Validator[]>([]);

    let api: ValidationAPI = {
        addValidator(validator: Validator<any>): void {
            setValidators(listAdd(validators, validator));
        }
    };

    return (
        <ValidationContext.Provider value={api}>
            {children}
        </ValidationContext.Provider>
    );
}

export let useValidation = () => useContext(ValidationContext);

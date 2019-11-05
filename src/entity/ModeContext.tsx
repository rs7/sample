import React, {ReactElement, useContext} from "react";
import {Mode} from "./Mode";

const ModeContext = React.createContext<Mode>(Mode.View);

export function ModeProvider({value, children}: {value: Mode, children: ReactElement}) {
    return (
        <ModeContext.Provider value={value}>
            {children}
        </ModeContext.Provider>
    );
}

export const useMode = () => useContext(ModeContext);

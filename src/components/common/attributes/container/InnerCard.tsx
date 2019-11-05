import React, {useContext} from "react";
import {DetailsComponent1, DetailsComponent2} from "../../../projects/details/DetailsComponent/DetailsComponentByLevel";

const LevelContext = React.createContext(1);

const useLevel = () => useContext(LevelContext);

function getCardComponentByLevel(level) {
    switch (level) {
        case 1:
            return DetailsComponent1;
        case 2:
            return DetailsComponent2;
        default:
            return () => <div>Превышена вложенность компонентов ({level})</div>;
    }
}

export function InnerCard({children, title = undefined, listMode = false}) {
    let level = useLevel();
    let CardComponent = getCardComponentByLevel(level);

    return (
        <LevelContext.Provider value={level + 1}>
            <CardComponent title={title} listMode={listMode}>
                {children}
            </CardComponent>
        </LevelContext.Provider>
    );
}

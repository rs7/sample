import {Screen} from "@vendor/bcd-front-ui-standalone";
import React from "react";
import {useKeycloak} from "../../../auth/Keycloak";

export function Header() {
    return (
        <Screen.Header title="Project Passport" ScreenUser={ScreenUser}/>
    );
}

function ScreenUser() {
    let keycloak = useKeycloak();

    return (
        <div>{keycloak.idTokenParsed.name} <a href={keycloak.createLogoutUrl()}>(выйти)</a></div>
    );
}

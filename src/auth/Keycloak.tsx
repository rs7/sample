import Keycloak from "keycloak-js";
import React, {ReactElement, useContext, useState} from "react";
import {CenteredLoader} from "../components/common/interfaceElements/InterfaceBlocks";
import {useComponentDidMount} from "../utils/react-helper";

let keycloak = new Keycloak({
    clientId: "project-passport",
    oidcProvider: "https://keycloak.vendor.ru/auth/realms/MSAzure",
});

let KeycloakContext = React.createContext(keycloak);

export const useKeycloak = () => useContext(KeycloakContext);

export function KeycloakWrapper({children}: {children: ReactElement}) {
    let [authenticated, setAuthenticated] = useState(false);

    let [keycloak] = useState(new Keycloak({
        clientId: "project-passport",
        oidcProvider: "https://keycloak.vendor.ru/auth/realms/MSAzure",
        promiseType: "native",
    }));

    useComponentDidMount(async () => {
        keycloak.init({flow: "implicit", onLoad: "login-required", checkLoginIframe: true});
        keycloak.onReady = setAuthenticated;
        keycloak.createLogoutUrl = () => "https://logout.vendor.ru/auth/realms/MSAzure/protocol/openid-connect/logout";
    });

    if (!authenticated) return <CenteredLoader/>;

    return (
        <KeycloakContext.Provider value={keycloak}>
            {children}
        </KeycloakContext.Provider>
    );
}

import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {KeycloakWrapper} from "../../auth/Keycloak";
import {Main} from "../main/Main";
import {GlobalStyle} from "../styles/GlobalStyle";
import {Test} from "../test/Test";

export function Application() {
    return <>
        <GlobalStyle/>
        <BrowserRouter>
            <Switch>
                <Route path={"/test"} exact={true} component={Test}/>
                <Route component={MainRoute}/>
            </Switch>
        </BrowserRouter>
    </>;
}

let MainRoute = () => (
    <KeycloakWrapper>
        <Main/>
    </KeycloakWrapper>
);

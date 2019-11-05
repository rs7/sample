import {Screen} from "@vendor/bcd-front-ui-standalone";
import React from "react";
import {Content} from "./content/Content";
import {Header} from "./header/Header";
import {Sidebar} from "./sidebar/Sidebar";

export function Main() {
    return (
        <Screen>
            <Header/>

            <Screen.SidebarLayout>
                <Screen.Sidebar collapsible={true}>
                    <Sidebar/>
                </Screen.Sidebar>

                <Screen.Content>
                    <Content/>
                </Screen.Content>
            </Screen.SidebarLayout>
        </Screen>
    );
}

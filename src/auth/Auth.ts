import {useKeycloak} from "./Keycloak";

export enum Role {
    Administrator = "Administrator",
    PortfolioManager = "portfolio_manager",
    ProgramManager = "program_manager",
    ProjectManager = "project_manager",
    User = "user",
}

export function canEditProject() {
    let keycloak = useKeycloak();
    return [
        Role.Administrator,
        Role.PortfolioManager,
        Role.ProgramManager,
        Role.ProjectManager,
    ].some(role => keycloak.hasResourceRole(role))
}

export function canEditProgram() {
    let keycloak = useKeycloak();
    return [
        Role.Administrator,
        Role.PortfolioManager,
        Role.ProgramManager,
    ].some(role => keycloak.hasResourceRole(role))
}

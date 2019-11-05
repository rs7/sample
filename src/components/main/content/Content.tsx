import React from "react";
import {Route, Switch} from "react-router-dom";
import styled from "styled-components";
import {
    programCreateLink,
    programLink,
    projectCreateLink,
    projectLink,
    projectsByTypeAndStatusLink
} from "../../../route/Links";
import {PortfolioDetailsWrapper} from "../../portfolios/PortfolioDetailsWrapper";
import {PortfoliosListWrapper} from "../../portfolios/PortfoliosListWrapper";
import ProgramCreationWrapper from "../../programs/details/ProgramCreationWrapper";
import {ProgramDetailsWrapper} from "../../programs/details/ProgramDetailsWrapper";
import ProgramsList from "../../programs/list/ProgramsList";
import ProjectCreationWrapper from "../../projects/details/ProjectCreationWrapper";
import {ProjectDetailsWrapper} from "../../projects/details/ProjectDetailsWrapper";
import {ProjectTypesWrapper} from "../../projects/list/groupList/ProjectTypesWrapper";
import {ProjectsList} from "../../projects/list/ProjectsList";
import {indents} from "../../styles/variables/indents";

const Container = styled.div`
    display: flex;
    padding: 0 ${indents.indent6};
    flex-wrap: wrap;
    align-content: flex-start;
`;

export function Content() {
    return (
        <Container>
            <Switch>
                <Route path='/projects' exact={true} component={ProjectTypesWrapper}/>
                <Route path={projectLink(":id")} exact={true}>
                    {
                        params => {
                            let id = params.match.params["id"];
                            return <ProjectDetailsWrapper id={id} key={id}/>;
                        }
                    }
                </Route>
                <Route path={projectCreateLink(":projectCode", ":typeId")} exact={true}>
                    {
                        params => {
                            const typeId = params.match.params["typeId"];
                            const projectCode = params.match.params["projectCode"];
                            return <ProjectCreationWrapper typeId={typeId}
                                                           projectCode={projectCode}
                                                           key={typeId}/>;
                        }
                    }
                </Route>
                <Route path={projectsByTypeAndStatusLink(":typeId", ":statusId")} exact={true}>
                    {
                        params => {
                            const typeId = params.match.params["typeId"];
                            const statusId = params.match.params["statusId"];
                            return <ProjectsList typeId={typeId} statusId={statusId} key={typeId}/>;
                        }
                    }
                </Route>
                <Route path='/projects/:typeId' exact={true}>
                    {
                        params => {
                            let id = params.match.params["typeId"];
                            return <ProjectsList typeId={id} key={id}/>;
                        }
                    }
                </Route>

                <Route exact path='/programs' component={ProgramsList}/>
                <Route path={programLink(":id")} exact={true}>
                    {
                        params => {
                            let id = params.match.params["id"];
                            return <ProgramDetailsWrapper id={id} key={id}/>;
                        }
                    }
                </Route>

                <Route path={programCreateLink(":programCode", ":typeId")} exact={true}>
                    {
                        params => {
                            const typeId = params.match.params["typeId"];
                            const programCode = params.match.params["programCode"];
                            return <ProgramCreationWrapper typeId={typeId}
                                                           programCode={programCode}
                                                           key={typeId}/>;
                        }
                    }
                </Route>
                <Route path='/programs/:typeId' component={ProgramsList}/>

                <Route exact path='/portfolio' component={PortfoliosListWrapper}/>
                <Route exact path='/portfolio/details/:id'>
                    {
                        params => {
                            let id = params.match.params["id"];
                            return <PortfolioDetailsWrapper id={id} key={id}/>;
                        }
                    }
                </Route>
            </Switch>
        </Container>
    );
}

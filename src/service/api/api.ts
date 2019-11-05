import {ProjectClassName, VariousClassName} from "../../model/common/className/ClassName";
import {GUIDWithClassName} from "../../model/common/guid/GUID";
import {Portfolio} from "../../model/crud/portfolio/Portfolio";
import {Program} from "../../model/crud/program/Program";
import {ProgramType} from "../../model/crud/program/ProgramType";
import {Project as ProjectCRUD} from "../../model/crud/project/Project";
import {ProjectType} from "../../model/crud/project/ProjectType";
import {extendEntity} from "../../model/new/ExtendEntity";
import {SpecificProgram} from "../../model/new/program/SpecificProgram";
import {SpecificProject as ProjectNew} from "../../model/new/project/SpecificProject";
import {crudAPI} from "./crudAPI";
import {newAPI, StatusCounts} from "./newAPI";

export const api = {
    async getPortfolios() {
        let result = await crudAPI.select<Portfolio>({
            class: VariousClassName.portfolio,
            pageSize: crudAPI.MaxPageSize,
        });

        return result.list;
    },

    async getPortfolioDetails(id: string) {
        return await crudAPI.get<Portfolio>({id});
    },

    async getProjectsCountByType(projectTypeId: string) {
        let result = await crudAPI.select<ProjectCRUD>({
            class: VariousClassName.Projects,
            criteria: `[ProjectType=${projectTypeId}]`,
            pageSize: crudAPI.MaxPageSize,
        });

        return result.total;
    },

    async getProjectsCountByTypeAndStatus(projectTypeId: string, projectStatusId: string, abortController?: AbortController) {
        let result = await crudAPI.select<ProjectCRUD>({
            class: VariousClassName.Projects,
            criteria: `[ProjectType=${projectTypeId}] AND [status=${projectStatusId}]`,
            pageSize: crudAPI.MaxPageSize,
        }, abortController);

        return result.total;
    },

    async getProjects(projectTypeId: string) {
        let result = await crudAPI.select<ProjectCRUD>({
            class: VariousClassName.Projects,
            criteria: `[ProjectType=${projectTypeId}]`,
            orderBy: [
                {attr: "title", desc: false},
            ],
            pageSize: crudAPI.MaxPageSize,
        });

        return result.list;
    },

    async getProjectsByTypeAndStatus(projectTypeId: string, projectStatusId: string) {
        let result = await crudAPI.select<ProjectCRUD>({
            class: VariousClassName.Projects,
            criteria: `[ProjectType=${projectTypeId}] AND [status=${projectStatusId}]`,
            pageSize: crudAPI.MaxPageSize,
        });

        return result.list;
    },

    async getProjectsByProgram(programId: string) {
        let result = await crudAPI.select<ProjectCRUD>({
            class: VariousClassName.Projects,
            criteria: `[programm=${programId}]`,
            orderBy: [
                {attr: "title", desc: false},
            ],
            pageSize: crudAPI.MaxPageSize,
        });

        return result.list;
    },

    async getProjectTypes() {
        let result = await crudAPI.select<ProjectType>({
            class: VariousClassName.ProjectType,
            orderBy: [
                {attr: "ord", desc: false},
            ],
            pageSize: crudAPI.MaxPageSize,
        });

        return result.list;
    },

    async getProjectType(id: string) {
        return await crudAPI.get<ProjectType>({id});
    },

    async getProgramTypes() {
        let result = await crudAPI.select<ProgramType>({
            class: VariousClassName.ProgrammTypes,
            orderBy: [
                {attr: "ord", desc: false},
            ],
            pageSize: crudAPI.MaxPageSize,
        });

        return result.list;
    },

    async getProgramsByType(programTypeID: string) {
        let result = await crudAPI.select<Program>({
            class: VariousClassName.Programm,
            criteria: `[type=${programTypeID}]`,
            orderBy: [
                {attr: "title", desc: false},
            ],
            pageSize: crudAPI.MaxPageSize,
        });

        return result.list;
    },

    async getProgramType(programTypeID: string) {
        let result = await crudAPI.select<ProgramType>({
            class: VariousClassName.ProgrammTypes,
            criteria: `[id=${programTypeID}]`,
            pageSize: crudAPI.MaxPageSize,
        });

        return result.list;
    },

    async getProgramsCountByType(programTypeId: string) {
        let result = await crudAPI.select<Program>({
            class: VariousClassName.Programm,
            criteria: `[type=${programTypeId}]`,
            pageSize: crudAPI.MaxPageSize,
        });

        return result.total;
    },

    async getProjectDetails(id: GUIDWithClassName) {
        let result = await newAPI.get<ProjectNew>("projects", {id});

        extendEntity(result);

        return result;
    },

    async getProgramDetails(id: GUIDWithClassName) {
        let result = await newAPI.get<SpecificProgram>("programs", {id});

        extendEntity(result);

        return result;
    },

    async getProjectTypeCounts(projectTypeCode: ProjectClassName): Promise<StatusCounts | null> {
        let result = await newAPI.getCounts(projectTypeCode);
        // console.log(`${projectTypeCode} COUNTS: `,result);
        return result;
    },
};

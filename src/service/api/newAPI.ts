import {API} from "./back";
import {DangerouslyProjectStatus} from "../../model/common/enums/ProjectStatus";

export let newAPI = {
    get,
};

async function get<T>(type: string, params: GetParams) {
    return apiCall<GetResult<T>>(type, params).catch(error => {
        //alert(error);
        return null;
    });
}

interface GetParams {
    id: string;
}

export interface StatusCounts {
    "status-info": StatusCount[];
    total: number;
}

export interface StatusCount {
    title: string;
    id: DangerouslyProjectStatus;
    count: number;
}

type GetResult<T> = T

export interface SuccessResult<T> {
    status: "success";
    result: T;
}

interface ErrorResult {
    status: "error";
    message: string;
}

async function apiCall<T>(type: string, params: object): Promise<T> {

    let queryRaw = new URLSearchParams(params).toString();
    let query = queryRaw ? `?${queryRaw}` : "";

    let url = `${API}/dc/getDetails/${type}${query}`;

    let headers = new Headers([
        ["Content-Type", "application/json"],
    ]);

    let response = await fetch(url, {headers, method: "GET"});

    if (!response.ok) {
        throw new Error(await getErrorMessage(response));
    }

    let responseBody = await response.json() as SuccessResult<T> | ErrorResult;

    switch (responseBody.status) {
        case "error":
            throw new Error(responseBody.message);

        case "success":
            return responseBody.result;
    }

    throw new Error("неожидаемый ответ от api");
}

async function getErrorMessage(response: Response): Promise<string> {
    let result = await response.json().catch(() => undefined) as FailResult | undefined;

    if (result && "errorCode" in result) {
        if (result.errorMessage) {
            return result.errorMessage;
        }
    }

    return response.statusText;
}

interface FailResult {
    errorCode: number;
    errorMessage: string;
}

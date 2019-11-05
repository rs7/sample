import {Nominal} from "../../utils/types";
import {API} from "./back";

export let crudAPI = {
    get,
    select,
    MaxPageSize: 500,
};

export type Criteria = Nominal<string, "Criteria">;

async function get<T>(params: GetParams) {
    return apiCall<GetResult<T>>("get", params);
}

async function select<T>(params: SelectParams, abortController?: AbortController) {
    return apiCall<SelectResult<T>>("select", params, abortController);
}

interface GetParams {
    id: string;
}

type GetResult<T> = T

interface SelectParams {
    class: string;
    criteria?: string;
    orderBy?: {attr: string, desc: boolean}[];
    pageSize?: number;
    page?: number;
}

interface SelectResult<T> {
    total: number;
    list: T[];
}

async function apiCall<T>(method: string, params: object, abortController?: AbortController): Promise<T> {
    const abortSignal = abortController ? abortController.signal : null;

    let url = `${API}/dc/${method}`;
    let headers = new Headers([
        ["Content-Type", "application/json"],
    ]);
    let body = JSON.stringify(params);

    let response = await fetch(url, {headers, body, method: "POST", signal: abortSignal});

    if (!response.ok) {
        throw new Error(await getErrorMessage(response));
    }

    return getResult<T>(response);
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

function getResult<T>(response: Response): Promise<T> {
    return response.json() as Promise<T>;
}

interface FailResult {
    errorCode: number;
    errorMessage: string;
}

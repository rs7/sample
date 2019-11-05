export function projectLink(id: string): string {
    return `/projects/details/${id}`;
}

export function projectCreateLink(projectCode: string, typeId: string): string {
    return `/projects/create/${typeId}/${projectCode}`;
}

export function projectsByTypeAndStatusLink(typeId: string, statusId: string): string {
    return `/projects/byStatus/${typeId}/${statusId}`;
}

export function programCreateLink(programCode: string, typeId: string): string {
    return `/program/create/${typeId}/${programCode}`;
}

export function programLink(id: string): string {
    return `/programs/details/${id}`;
}

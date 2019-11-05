export function listAdd<T>(list: T[], item: T): T[] {
    return [].concat(list, item);
}

export function listRemove<T>(list: T[], index: number): T[] {
    return list.filter(
        (value, i) => i !== index
    );
}

export function listItem<T>(list: T[], index: number, item: T): T[] {
    return list.map(
        (value, i) => i === index ? item : value
    );
}

export function objectPartialChange<T extends Object>(object: T, partial: Partial<T>): T {
    return Object.assign(Object.create(object), object, partial);
}

export function cloneObject<T extends Object>(object: T): T {
    let copy = JSON.parse(JSON.stringify(object));
    Object.setPrototypeOf(copy, Object.getPrototypeOf(object));
    return copy;
}

export function listIsEmpty<T>(value: T[]): boolean {
    return value.length === 0;
}

export function oneItemList<T>(value: T): T[] {
    if (value === null) return [];
    return [value];
}

export function oneItemListValue<T>(value: T[]): T {
    if (value.length === 0) return null;
    return value[0];
}

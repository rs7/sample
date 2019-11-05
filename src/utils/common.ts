export function undefinedToNull<T>(value: T): T {
    return value === undefined ? null : value;
}

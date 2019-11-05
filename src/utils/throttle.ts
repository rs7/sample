interface VoidFunction extends Function {
    (...args: any): void;
}

export function createThrottle<T extends VoidFunction>(Func: T, delay: number): T {
    let timeout: number;

    return function (...args: Parameters<T>) {
        clearTimeout(timeout);
        timeout = setTimeout(() => Func(args), delay);
    } as T;
}

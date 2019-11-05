import {useEffect} from "react";

export function useComponentDidMount(f) {
    useEffect(() => {
        f();
    }, []);
}

export function useComponentDidUnmount(f) {
    useEffect(() => {
        return f;
    }, []);
}

export function useAsyncEffect(f, values) {
    useEffect(() => {
        f();
    }, values);
}

declare class OpaqueTag<S extends string> {
    protected __tag: S;
}

export type Nominal<T, S extends string> = T & OpaqueTag<S>;

export type Nullable<T> = T | null;

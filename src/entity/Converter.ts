export interface Converter<Source, Target> {
    (value: Source): Target;
}

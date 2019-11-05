export function simpleRandomID() {
    return (Math.random() * 1e8 | 0).toString(16);
}

export function simpleTimeID() {
    return (+new Date).toString(16);
}

export function parseDateWithoutOffset(dateString: string): Date {
    let date = new Date(dateString);
    let userTimezoneOffset = date.getTimezoneOffset() * 60000;
    return new Date(date.getTime() - userTimezoneOffset);
}

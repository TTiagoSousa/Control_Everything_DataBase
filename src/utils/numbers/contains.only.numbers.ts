export function containsOnlyNumbers(value: unknown): boolean {
    return typeof value === 'number' && !isNaN(value);
}
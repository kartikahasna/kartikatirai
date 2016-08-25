

export function isValueType(obj: any): boolean {
    const t = typeof obj;
    return t !== "object" && t !== "function";
}

export function clone<T>(obj: T): T {
    if (obj === undefined) {
        return undefined;
    }

    if (obj === null) {
        return null;
    }

    if (Array.isArray(obj)) {
        return <T>(<any>(<any[]>(<any>obj)).map(i => clone(i)));
    }

    if (typeof obj === "object") {
        const result: T = <T>({});

        for (const key in obj) {
            result[key] = clone(obj[key]);
        }

        return result;
    }

    if (typeof obj === "function") {
        return obj;
    }

    return obj;
}

export function merge<T>(prev: T, next: T): T {
    if (prev === undefined) {
        if (next === undefined) {
            return undefined;
        }

        if (next === null) {
            return null;
        }

        return clone<T>(next);
    }

    if (prev === null) {
        if (next === undefined || next === null) {
            return null;
        }

        return clone<T>(next);
    }

    if (next === undefined) {
        return clone<T>(prev);
    }

    if (next === null) {
        return null;
    }

    const tPrev = typeof prev;
    const tNext = typeof next;

    if ((tPrev !== "object" && tPrev !== "function") && (tNext !== "object" && tNext !== "function")) {
        return clone<T>(next);
    }

    if (Array.isArray(prev) && Array.isArray(next)) {
        return <T>(<any>((<any[]>(<any>next)).map((item) => { return clone(item); })));
    }

    const result = clone<T>(prev);

    for (const key in next) {
        if (Object.prototype.hasOwnProperty.call(next, key)) {
            result[key] = merge(prev[key], next[key]);
        }
    }

    return result;
}

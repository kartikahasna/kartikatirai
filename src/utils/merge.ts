

export function isValueType(obj: any): boolean {
    const t = typeof obj;
    return t !== "object" && t !== "function";
}

export function clone<T>(obj: T): T {
    if (typeof obj === "object") {
        return <T>new Object(obj);
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
//        return <T>(new Object(next));
    }

    if (prev === null) {
        if (next === undefined || next === null) {
            return null;
        }

        return clone<T>(next);
//        return <T>(new Object(next));
    }

    if (next === undefined) {
        return clone<T>(prev);
//        return <T>(new Object(prev));
    }

    if (next === null) {
        return null;
    }

    const tPrev = typeof prev;
    const tNext = typeof next;

    if ((tPrev !== "object" && tPrev !== "function") && (tNext !== "object" && tNext !== "function")) {
        return clone<T>(next);
//        return <T>(new Object(next));
    }


    const result = <T>(new Object(prev));

    for (const key in next) {
        if (Object.prototype.hasOwnProperty.call(next, key)) {
            result[key] = merge(prev[key], next[key]);
        }
    }

    return result;
}

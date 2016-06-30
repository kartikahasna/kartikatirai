export function createContextBindedCallback<T1>(context: any, callback: (arg1: T1) => void): (arg1: T1) => void {
    return (arg1: T1) => {
        callback.apply(context, [arg1]);
    }
}

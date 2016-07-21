export interface SubComponentProps<C extends Connector> {
    connector: C;
}


export interface Connector {
    // ここに関数を書けば、子 => 親
    // 、親 => 子
}


export interface Action<T> {
    (arg: T): void;
    (context: any, callback: (arg: T) => void): void;
}

interface CallbackItem<T> {
    context: any;
    callback: (arg: T) => void;
}


export function createAction<T>(): Action<T> {
    const callbacks: CallbackItem<T>[] = [];

    return (arg1, arg2?) => {
        if (arg2) {
            // bind callback
            const callback: (arg: T) => void = <(arg: T) => void>arg2;
            const context: any = arg1;
            const item: CallbackItem<T> = {
                context: context,
                callback: callback,
            };

            callbacks.push(item);

            return () => {
                for (let i = 0; i < callbacks.length; i++) {
                    if (callbacks[i] === item) {
                        callbacks.splice(i, 1);
                    }
                }
            }
        } else {
            // fire
            const arg: T = <T>arg1;

            for (let i = 0; i < callbacks.length; i++) {
                callbacks[i].callback.apply(callbacks[i].context, [arg]);
            }
        }
    };
}

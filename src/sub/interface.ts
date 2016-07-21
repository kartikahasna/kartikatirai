export interface SubComponentProps<C extends Connector> {
    connector: C;
}


export interface Connector {
    // ここに関数を書けば、子 => 親
    // 、親 => 子
}

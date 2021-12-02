interface MyArray<T> {
    [N: number]: T

    map<U>(fn: (el: T, index: number, arr: MyArray<T>) => U): MyArray<U>
    reduce(fn: (prev: T, current: T, currentIndex: number, arr: MyArray<T>) => T): T
    reduce(fn: (prev: T, current: T, currentIndex: number, arr: MyArray<T>) => T, initial: T): T
    reduce<U>(fn: (prev: U , current: T, currentIndex: number, arr: MyArray<T>) => U, initial: U): U
}

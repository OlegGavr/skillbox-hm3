// @ts-ignore
import {IntrinsicElements} from "react";

type TGetJSXPropsProp<T extends keyof JSX.IntrinsicElements> = JSX.IntrinsicElements[T];

type TDivProps = TGetJSXPropsProp<"div">;

const props: TDivProps = {
    className: 'handler', // не выкидывает ошибку так как валидно для div элемента
    src: "ddd", // выдает ошибку для div, но не выдает ошибку для img
}

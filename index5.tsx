import * as React from "react";

function HomeComponent(props: { firstProp: string }) {
    return (
        <div>
            { props.firstProp }
        </div>
    )
}

type ReturnType<T> = T extends ((...args: infer R) => any) ? R : never;

type t = ReturnType<typeof HomeComponent>;

const params: t = [
    {
        firstProp: "2"
    }
]


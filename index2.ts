interface MyHometaskMain {
    howIDoIt: string;
    simeArray: Array<string | number>;
}

interface MyHometaskType extends MyHometaskMain {
    withData: MyHometaskMain[];
}

const MyHometask: MyHometaskType = {
    howIDoIt: "I Do It Wel",
    simeArray: ["string one", "string two", 42],
    withData: [{ howIDoIt: "I Do It Wel", simeArray: ["string one", 23] }],
}

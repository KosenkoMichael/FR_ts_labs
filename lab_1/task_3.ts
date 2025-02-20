const TestNumber: number = 11;

let TestString: string = "testString";

const TestBoolean: boolean = true;

let TestArray: number[] = [1, 2, 3, 4, 5];

const TestTuple: [string, number] = ["string", 11];

const TestObject: { name: string; age: number } = {
    name: "name",
    age: 11,
};

enum TestEnum {
    First = "First",
    Second = "Second",
    Third = "Third",
}
let Position: TestEnum = TestEnum.Second;

let TestAny: any = "anything";
TestAny = 11;
TestAny = true;
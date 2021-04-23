// VOID to say that we dont return something from the function
const doSomething = (): void => {
    console.log("doSomething");
}

// DONT USE ANY -->> Any type turns off TypeScript checks
let foo: any = "foo";

// console.log(foo.bar()); ->> we dont get an error, its just ignore. And its a nonsense


// NEVER - Function with never can't be executed to the end
const doSomethingElse = (): never => {
    throw "never";
    console.log("doSomethingElse");
}

// UNKNOWN Just like all types are assignable to any,
// all types are assignable to unknown. This makes unknown another top type of TypeScript's type system 


let value: unknown;

value = true;             // OK
value = 42;               // OK
value = "Hello World";    // OK
value = [];               // OK
value = {};               // OK
value = Math.random;      // OK
value = null;             // OK
value = undefined;        // OK
value = new TypeError();  // OK
value = Symbol("type");   // OK

// let value: unknown;

// let value1: unknown = value;   // OK
// let value2: any = value;       // OK
// let value3: boolean = value;   // Error
// let value4: number = value;    // Error
// let value5: string = value;    // Error
// let value6: object = value;    // Error
// let value7: any[] = value;     // Error
// let value8: Function = value;  // Error
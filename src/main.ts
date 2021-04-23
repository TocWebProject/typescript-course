interface User {
    name: string;
    age?: number;
}

const user: User = {
    name: "Monster",
    age: 22,
}

const user2: User = {
    name: "Jack",
}

console.log(user.name);
console.log(user.age);
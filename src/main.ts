interface User {
    name: string;
    age?: number;
    getMessage(): string;
}

const user: User = {
    name: "Monster",
    age: 22,
    getMessage() {
        return "Hello" + " " + this.name;
    }
}

const user2: User = {
    name: "Jack",
    getMessage() {
        return "Hello" + " " + this.name; 
    }
}

console.log(user.getMessage());
console.log(user2.getMessage());
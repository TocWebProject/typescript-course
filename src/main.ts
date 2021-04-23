interface UserInterface {
    name: string;
    age?: number;
    getMessage(): string;
}

const user: UserInterface = {
    name: "Monster",
    age: 22,
    getMessage() {
        return "Hello" + " " + this.name;
    }
}

const user2: UserInterface = {
    name: "Jack",
    getMessage() {
        return "Hello" + " " + this.name; 
    }
}

console.log(user.getMessage());
console.log(user2.getMessage());
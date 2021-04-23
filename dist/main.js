var user = {
    name: "Monster",
    age: 22,
    getMessage: function () {
        return "Hello" + " " + this.name;
    }
};
var user2 = {
    name: "Jack",
    getMessage: function () {
        return "Hello" + " " + this.name;
    }
};
console.log(user.getMessage());
console.log(user2.getMessage());

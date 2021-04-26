interface UserInterface {
    // we want implement getFullName methods, if not the class wont work.
    getFullName(): string;
}

class User implements UserInterface {
    firstName: string
    lastName: string
    readonly unchangableName: string
    static readonly maxAge = 50

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName
        this.lastName = lastName
        this.unchangableName = firstName;
    }

    changeUnchagableName(): void {
        // Cant be asign cause is a read only property
        // this.unchangableName ="foo";
    }


    // If we delete this function the class we show on error cause the interface required it ! 
    getFullName() :string {
        return this.firstName + '' + this.lastName
    }
}

const user = new User('Toc', 'Dev');

console.log(user.firstName);

// With static property we can acces in the Class User only and not in the user we created. 
// console.log(user.maxAge)  -->> this will not work.
console.log(User.maxAge);
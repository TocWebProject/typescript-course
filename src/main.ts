class User {
    private firstName: string
    private lastName: string
    readonly unchangableName: string

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName
        this.lastName = lastName
        this.unchangableName = firstName;
    }

    changeUnchagableName(): void {
        // Cant be asign cause is a read only property
        // this.unchangableName ="foo";
    }

    getFullName() :string {
        return this.firstName + '' + this.lastName
    }
}

const user = new User('Toc', 'Dev');
// The Only properties available for user is getFullName
console.log(user.getFullName);
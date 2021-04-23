type ID = string;
type PopularTag = string;
type MaybePopularTag = PopularTag | null;

interface UserInterface {
    // Unique entity that wen can use everywhere
    id: ID;
    name: string;
    surname: string;
}

// Brings clarity to the code - 
const popularTags: PopularTag[] = ["dragon", "coffee"]

// This will work
const dragonsTag: MaybePopularTag = null;
console.log(dragonsTag)
// const dragonsTag: MaybePopularTag = "Hello"; -->> will work too
// const dragonsTag: MaybePopularTag = []; -->> will not work ! 
// it cant be a empty array cause Union + Type alias defined in MaybePopularTag 

let username: string = "Yann";

// pageName can be a string or a number
let pageName: string | number = "1";

// Assing default value null for errorMessage
let errorMessage: string | null = null;

let user: UserInterface | null = null;
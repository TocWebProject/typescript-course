type ID = string;
type PopularTag = string;

interface UserInterface {
    // Unique entity that wen can use everywhere
    id: ID;
    name: string;
    surname: string;
}

// Brings clarity to the code - 
const popularTags: PopularTag[] = ["dragon", "coffee"]

let username: string = "Yann";

// pageName can be a string or a number
let pageName: string | number = "1";

// Assing default value null for errorMessage
let errorMessage: string | null = null;

let user: UserInterface | null = null;
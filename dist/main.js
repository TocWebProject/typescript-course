// Brings clarity to the code - 
var popularTags = ["dragon", "coffee"];
// This will work
var dragonsTag = null;
console.log(dragonsTag);
// const dragonsTag: MaybePopularTag = "Hello"; -->> will work too
// const dragonsTag: MaybePopularTag = []; -->> will not work ! 
// it cant be a empty array cause Union + Type alias defined in MaybePopularTag 
var username = "Yann";
// pageName can be a string or a number
var pageName = "1";
// Assing default value null for errorMessage
var errorMessage = null;
var user = null;

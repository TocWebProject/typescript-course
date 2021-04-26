//Type assertion to fix the type of any of the page.
let page: any = "1";
let pageNumber = page as string;

//DOM

// BAD CODE
const someElement = document.querySelector(".class");
console.log("someElement", (someElement as any).value);

// GOOD CODE 
const someElement2 = document.querySelector(".class") as HTMLInputElement;
console.log("someElement2", someElement2.value);


// DOM event listener
// we have to define a type for the target to be able to read the value.
const someElement3 = document.querySelector(".foo");
someElement3.addEventListener('blur', (event) => {
    const target = event.target as HTMLInputElement;
    console.log('event', target.value);
});
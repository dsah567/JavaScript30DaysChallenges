//Activity  1 Object Creation and access
let book = {
    'title' : "cs",
    'author' : "Dipu",
    "year":2024
}
// console.log(book);

// console.log(book.title, book.author);

// // Activity 2 Object Method
// book.titleAuthor= function (){
//     console.log(this.author,this.title);
// }
// book.titleAuthor();

// book.updateYear=function(year){
//     this.year=year;
// }
// book.updateYear(2020)
// console.log(book);

//Activity 3 Nested Objects
let library={
    "name":"com",
    "books":["compiler","computation","design","database"]
}
// console.log(library);
// console.log(library.name);
// library.books.forEach((n)=>console.log(n))

// //Activity 4 the this keyword
// book.titleAuthor= function (){
//     console.log(this.title,this.year);
// }
// book.titleAuthor();

//Activity 5 Object Iteration 
for(let property in book){
    console.log(property,book[property]);
}
console.log(Object.keys(book));
console.log(Object.values(book));
import Book from "./Book.js";

const book1 = new Book(
  "Levels of Leadership",
  "John C. Maxwell",
  "Self Improvement",
  200,
  "Softback",
  2016,
  true
);

console.log(book1);
console.log("Days since published: ", book1.daysSincePublished());

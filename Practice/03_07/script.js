/**
 * Practice: Building objects
 *
 * - Create JavaScript objects based on objects in your current environment.
 * - Give each object an identifiable name.
 * - Create properties to describe the objects and set their values.
 * - Find an object that has another object inside of it to create a nested object.
 * - Test your objects in the browser console by accessing the entire object and its specific properties.
 */

const box = {
  boxName: "Lowes Box",
  color: "brown",
  size: "large",
  shirts: {
    quantity: 2,
    color: "red",
  },
};

const table = {
  tableName: "Kitchen table",
  color: "black",
  material: "wood",
};

console.log("Box: ", box);
console.log("Table: ", table);

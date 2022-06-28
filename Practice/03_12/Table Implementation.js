import Table from "./Table.js";

const dinnerTable = new Table("DinnerTable", "Large", "Black", "Wood");

console.log("Table name:", dinnerTable.tableName);
console.log("Table material:", dinnerTable.material);
dinnerTable.changeName("Kitchen table");
console.log("New table name:", dinnerTable.tableName);

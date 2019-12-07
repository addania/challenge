export function converter(){

const csvToJson = require("csvtojson");
const fileSystem = require("fs");

const result = csvToJson().fromFile("./data/source.csv").then(source => {
  console.log(source);
})
return result;
}
